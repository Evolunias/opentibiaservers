import TopRubinotGuideKeywordPage, { generateMetadata } from './top-rubinot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopRubinotGuideKeywordPage />;
}
