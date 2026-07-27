import OldSchoolImperianicOfficialKeywordPage, { generateMetadata } from './old-school-imperianic-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolImperianicOfficialKeywordPage />;
}
