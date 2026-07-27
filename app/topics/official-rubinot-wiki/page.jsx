import OfficialRubinotWikiKeywordPage, { generateMetadata } from './official-rubinot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialRubinotWikiKeywordPage />;
}
