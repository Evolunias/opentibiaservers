import BestNepreniaWikiKeywordPage, { generateMetadata } from './best-neprenia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestNepreniaWikiKeywordPage />;
}
