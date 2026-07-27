import HighrateOtmadnessKeywordPage, { generateMetadata } from './highrate-otmadness';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateOtmadnessKeywordPage />;
}
