import TopOtmadnessWebsiteKeywordPage, { generateMetadata } from './top-otmadness-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopOtmadnessWebsiteKeywordPage />;
}
