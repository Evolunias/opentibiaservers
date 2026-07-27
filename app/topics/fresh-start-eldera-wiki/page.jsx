import FreshStartElderaWikiKeywordPage, { generateMetadata } from './fresh-start-eldera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartElderaWikiKeywordPage />;
}
