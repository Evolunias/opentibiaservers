import OfficialCarlinotWikiKeywordPage, { generateMetadata } from './official-carlinot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialCarlinotWikiKeywordPage />;
}
