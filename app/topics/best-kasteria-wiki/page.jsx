import BestKasteriaWikiKeywordPage, { generateMetadata } from './best-kasteria-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestKasteriaWikiKeywordPage />;
}
