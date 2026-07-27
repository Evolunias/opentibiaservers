import ActiveThaisotWikiKeywordPage, { generateMetadata } from './active-thaisot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveThaisotWikiKeywordPage />;
}
