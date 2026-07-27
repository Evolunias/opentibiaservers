import FreshStartKasteriaWikiKeywordPage, { generateMetadata } from './fresh-start-kasteria-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartKasteriaWikiKeywordPage />;
}
