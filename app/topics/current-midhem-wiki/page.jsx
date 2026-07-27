import CurrentMidhemWikiKeywordPage, { generateMetadata } from './current-midhem-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMidhemWikiKeywordPage />;
}
