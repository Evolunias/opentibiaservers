import FreshStartImperianicWikiKeywordPage, { generateMetadata } from './fresh-start-imperianic-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartImperianicWikiKeywordPage />;
}
