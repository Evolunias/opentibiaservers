import NoResetOxygenotWikiKeywordPage, { generateMetadata } from './no-reset-oxygenot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetOxygenotWikiKeywordPage />;
}
