import NewOriginaltibiaWikiKeywordPage, { generateMetadata } from './new-originaltibia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewOriginaltibiaWikiKeywordPage />;
}
