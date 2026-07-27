import OfficialMiracleWikiKeywordPage, { generateMetadata } from './official-miracle-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMiracleWikiKeywordPage />;
}
