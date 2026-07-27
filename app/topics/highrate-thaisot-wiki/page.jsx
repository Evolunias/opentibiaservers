import HighrateThaisotWikiKeywordPage, { generateMetadata } from './highrate-thaisot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateThaisotWikiKeywordPage />;
}
