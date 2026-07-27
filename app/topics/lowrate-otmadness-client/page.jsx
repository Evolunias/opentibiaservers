import LowrateOtmadnessClientKeywordPage, { generateMetadata } from './lowrate-otmadness-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateOtmadnessClientKeywordPage />;
}
