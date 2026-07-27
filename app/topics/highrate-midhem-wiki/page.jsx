import HighrateMidhemWikiKeywordPage, { generateMetadata } from './highrate-midhem-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateMidhemWikiKeywordPage />;
}
