import OldSchoolThaisotOtsKeywordPage, { generateMetadata } from './old-school-thaisot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolThaisotOtsKeywordPage />;
}
