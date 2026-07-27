import ThaisotWikiKeywordPage, { generateMetadata } from './thaisot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotWikiKeywordPage />;
}
