import OldSchoolThaisotOtKeywordPage, { generateMetadata } from './old-school-thaisot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolThaisotOtKeywordPage />;
}
