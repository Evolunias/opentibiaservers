import NewNepreniaWikiKeywordPage, { generateMetadata } from './new-neprenia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewNepreniaWikiKeywordPage />;
}
