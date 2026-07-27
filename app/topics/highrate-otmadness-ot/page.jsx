import HighrateOtmadnessOtKeywordPage, { generateMetadata } from './highrate-otmadness-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateOtmadnessOtKeywordPage />;
}
