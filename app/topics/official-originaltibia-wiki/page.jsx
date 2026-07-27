import OfficialOriginaltibiaWikiKeywordPage, { generateMetadata } from './official-originaltibia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialOriginaltibiaWikiKeywordPage />;
}
