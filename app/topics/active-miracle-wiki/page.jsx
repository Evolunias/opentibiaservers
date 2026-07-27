import ActiveMiracleWikiKeywordPage, { generateMetadata } from './active-miracle-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveMiracleWikiKeywordPage />;
}
