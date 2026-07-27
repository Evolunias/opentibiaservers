import TopKasteriaGuideKeywordPage, { generateMetadata } from './top-kasteria-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopKasteriaGuideKeywordPage />;
}
