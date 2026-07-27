import LowrateOtmadnessOtKeywordPage, { generateMetadata } from './lowrate-otmadness-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateOtmadnessOtKeywordPage />;
}
