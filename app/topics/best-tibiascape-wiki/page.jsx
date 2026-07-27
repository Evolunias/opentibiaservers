import BestTibiascapeWikiKeywordPage, { generateMetadata } from './best-tibiascape-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiascapeWikiKeywordPage />;
}
