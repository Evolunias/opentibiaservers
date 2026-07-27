import HighrateOriginaltibiaWikiKeywordPage, { generateMetadata } from './highrate-originaltibia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateOriginaltibiaWikiKeywordPage />;
}
