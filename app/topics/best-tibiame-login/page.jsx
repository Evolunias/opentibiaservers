import BestTibiameLoginKeywordPage, { generateMetadata } from './best-tibiame-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiameLoginKeywordPage />;
}
