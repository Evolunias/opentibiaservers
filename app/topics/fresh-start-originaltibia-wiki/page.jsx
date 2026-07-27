import FreshStartOriginaltibiaWikiKeywordPage, { generateMetadata } from './fresh-start-originaltibia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartOriginaltibiaWikiKeywordPage />;
}
