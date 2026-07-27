import BestTibijkaOtsKeywordPage, { generateMetadata } from './best-tibijka-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibijkaOtsKeywordPage />;
}
