import BestTibiaraWikiKeywordPage, { generateMetadata } from './best-tibiara-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiaraWikiKeywordPage />;
}
