import BestOriginaltibiaWikiKeywordPage, { generateMetadata } from './best-originaltibia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestOriginaltibiaWikiKeywordPage />;
}
