import FreshStartRubinotGuideKeywordPage, { generateMetadata } from './fresh-start-rubinot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartRubinotGuideKeywordPage />;
}
