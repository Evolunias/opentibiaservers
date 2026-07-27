import OfficialOxygenotWikiKeywordPage, { generateMetadata } from './official-oxygenot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialOxygenotWikiKeywordPage />;
}
