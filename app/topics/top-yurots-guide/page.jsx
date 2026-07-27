import TopYurotsGuideKeywordPage, { generateMetadata } from './top-yurots-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopYurotsGuideKeywordPage />;
}
