import BestTibiameOtsKeywordPage, { generateMetadata } from './best-tibiame-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiameOtsKeywordPage />;
}
