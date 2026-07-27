import NoResetRubinotWikiKeywordPage, { generateMetadata } from './no-reset-rubinot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetRubinotWikiKeywordPage />;
}
