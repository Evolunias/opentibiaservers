import OldSchoolThaisotKeywordPage, { generateMetadata } from './old-school-thaisot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolThaisotKeywordPage />;
}
