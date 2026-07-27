import TopNepreniaGuideKeywordPage, { generateMetadata } from './top-neprenia-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopNepreniaGuideKeywordPage />;
}
