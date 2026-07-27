import NewMidhemWikiKeywordPage, { generateMetadata } from './new-midhem-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewMidhemWikiKeywordPage />;
}
