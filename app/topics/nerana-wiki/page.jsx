import NeranaWikiKeywordPage, { generateMetadata } from './nerana-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NeranaWikiKeywordPage />;
}
