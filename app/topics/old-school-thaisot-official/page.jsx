import OldSchoolThaisotOfficialKeywordPage, { generateMetadata } from './old-school-thaisot-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolThaisotOfficialKeywordPage />;
}
