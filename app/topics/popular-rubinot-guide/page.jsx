import PopularRubinotGuideKeywordPage, { generateMetadata } from './popular-rubinot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularRubinotGuideKeywordPage />;
}
