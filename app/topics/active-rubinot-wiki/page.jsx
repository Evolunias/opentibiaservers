import ActiveRubinotWikiKeywordPage, { generateMetadata } from './active-rubinot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveRubinotWikiKeywordPage />;
}
