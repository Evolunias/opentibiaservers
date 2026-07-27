import HighrateElderaGuideKeywordPage, { generateMetadata } from './highrate-eldera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateElderaGuideKeywordPage />;
}
