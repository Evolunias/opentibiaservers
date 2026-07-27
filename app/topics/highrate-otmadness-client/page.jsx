import HighrateOtmadnessClientKeywordPage, { generateMetadata } from './highrate-otmadness-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateOtmadnessClientKeywordPage />;
}
