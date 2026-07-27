import LowrateOtmadnessWebsiteKeywordPage, { generateMetadata } from './lowrate-otmadness-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateOtmadnessWebsiteKeywordPage />;
}
