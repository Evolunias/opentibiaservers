import HighrateOtmadnessOtsKeywordPage, { generateMetadata } from './highrate-otmadness-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateOtmadnessOtsKeywordPage />;
}
