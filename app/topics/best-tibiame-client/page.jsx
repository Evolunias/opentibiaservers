import BestTibiameClientKeywordPage, { generateMetadata } from './best-tibiame-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiameClientKeywordPage />;
}
