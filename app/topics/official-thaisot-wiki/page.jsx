import OfficialThaisotWikiKeywordPage, { generateMetadata } from './official-thaisot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialThaisotWikiKeywordPage />;
}
