import BestTibiameKeywordPage, { generateMetadata } from './best-tibiame';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiameKeywordPage />;
}
