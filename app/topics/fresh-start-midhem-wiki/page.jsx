import FreshStartMidhemWikiKeywordPage, { generateMetadata } from './fresh-start-midhem-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartMidhemWikiKeywordPage />;
}
