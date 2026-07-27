import LowrateOxygenotWikiKeywordPage, { generateMetadata } from './lowrate-oxygenot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateOxygenotWikiKeywordPage />;
}
