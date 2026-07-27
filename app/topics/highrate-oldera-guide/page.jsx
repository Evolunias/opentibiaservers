import HighrateOlderaGuideKeywordPage, { generateMetadata } from './highrate-oldera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateOlderaGuideKeywordPage />;
}
