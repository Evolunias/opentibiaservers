import OldSchoolImperianicOtKeywordPage, { generateMetadata } from './old-school-imperianic-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolImperianicOtKeywordPage />;
}
