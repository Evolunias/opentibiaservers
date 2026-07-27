import OldSchoolStatusEuropeKeywordPage, { generateMetadata } from './old-school-status-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolStatusEuropeKeywordPage />;
}
