import LowrateCarlinotWikiKeywordPage, { generateMetadata } from './lowrate-carlinot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateCarlinotWikiKeywordPage />;
}
