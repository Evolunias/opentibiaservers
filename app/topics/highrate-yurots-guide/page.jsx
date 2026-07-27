import HighrateYurotsGuideKeywordPage, { generateMetadata } from './highrate-yurots-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateYurotsGuideKeywordPage />;
}
