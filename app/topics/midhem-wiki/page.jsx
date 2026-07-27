import MidhemWikiKeywordPage, { generateMetadata } from './midhem-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemWikiKeywordPage />;
}
