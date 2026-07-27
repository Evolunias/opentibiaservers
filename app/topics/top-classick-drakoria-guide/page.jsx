import TopClassickDrakoriaGuideKeywordPage, { generateMetadata } from './top-classick-drakoria-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopClassickDrakoriaGuideKeywordPage />;
}
