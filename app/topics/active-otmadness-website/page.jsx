import ActiveOtmadnessWebsiteKeywordPage, { generateMetadata } from './active-otmadness-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveOtmadnessWebsiteKeywordPage />;
}
