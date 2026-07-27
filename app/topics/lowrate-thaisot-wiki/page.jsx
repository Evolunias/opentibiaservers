import LowrateThaisotWikiKeywordPage, { generateMetadata } from './lowrate-thaisot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateThaisotWikiKeywordPage />;
}
