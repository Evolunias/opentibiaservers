import BestTibiameServerKeywordPage, { generateMetadata } from './best-tibiame-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiameServerKeywordPage />;
}
