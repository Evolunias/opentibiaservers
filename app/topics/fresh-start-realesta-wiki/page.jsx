import FreshStartRealestaWikiKeywordPage, { generateMetadata } from './fresh-start-realesta-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartRealestaWikiKeywordPage />;
}
