import LowrateOtmadnessOtServerKeywordPage, { generateMetadata } from './lowrate-otmadness-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateOtmadnessOtServerKeywordPage />;
}
