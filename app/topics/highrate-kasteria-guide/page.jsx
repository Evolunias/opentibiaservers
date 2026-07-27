import HighrateKasteriaGuideKeywordPage, { generateMetadata } from './highrate-kasteria-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateKasteriaGuideKeywordPage />;
}
