import LowrateOtmadnessServerKeywordPage, { generateMetadata } from './lowrate-otmadness-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateOtmadnessServerKeywordPage />;
}
