import TopOriginaltibiaWikiKeywordPage, { generateMetadata } from './top-originaltibia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopOriginaltibiaWikiKeywordPage />;
}
