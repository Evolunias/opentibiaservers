import FreshStartNepreniaWikiKeywordPage, { generateMetadata } from './fresh-start-neprenia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartNepreniaWikiKeywordPage />;
}
