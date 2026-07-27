import BestTibiameWikiKeywordPage, { generateMetadata } from './best-tibiame-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiameWikiKeywordPage />;
}
