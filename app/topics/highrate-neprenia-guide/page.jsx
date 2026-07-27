import HighrateNepreniaGuideKeywordPage, { generateMetadata } from './highrate-neprenia-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateNepreniaGuideKeywordPage />;
}
