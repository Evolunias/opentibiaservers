import CurrentRubinotWikiKeywordPage, { generateMetadata } from './current-rubinot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentRubinotWikiKeywordPage />;
}
