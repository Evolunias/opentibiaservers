import CurrentOriginaltibiaWikiKeywordPage, { generateMetadata } from './current-originaltibia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentOriginaltibiaWikiKeywordPage />;
}
