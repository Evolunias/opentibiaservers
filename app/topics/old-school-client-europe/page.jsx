import OldSchoolClientEuropeKeywordPage, { generateMetadata } from './old-school-client-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolClientEuropeKeywordPage />;
}
