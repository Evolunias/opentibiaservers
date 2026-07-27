import BestTibiaraOtsKeywordPage, { generateMetadata } from './best-tibiara-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiaraOtsKeywordPage />;
}
