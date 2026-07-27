import OldSchoolThaisotServerKeywordPage, { generateMetadata } from './old-school-thaisot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolThaisotServerKeywordPage />;
}
