import LowrateOtmadnessKeywordPage, { generateMetadata } from './lowrate-otmadness';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateOtmadnessKeywordPage />;
}
