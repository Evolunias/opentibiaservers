import OldSchoolClientMexicoKeywordPage, { generateMetadata } from './old-school-client-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolClientMexicoKeywordPage />;
}
