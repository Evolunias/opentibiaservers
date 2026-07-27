import HighrateOtmadnessWebsiteKeywordPage, { generateMetadata } from './highrate-otmadness-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateOtmadnessWebsiteKeywordPage />;
}
