import BestMiracleWikiKeywordPage, { generateMetadata } from './best-miracle-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestMiracleWikiKeywordPage />;
}
