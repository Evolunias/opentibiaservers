import OldSchoolYurotsOfficialKeywordPage, { generateMetadata } from './old-school-yurots-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolYurotsOfficialKeywordPage />;
}
