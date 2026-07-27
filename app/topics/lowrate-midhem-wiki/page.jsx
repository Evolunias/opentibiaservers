import LowrateMidhemWikiKeywordPage, { generateMetadata } from './lowrate-midhem-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateMidhemWikiKeywordPage />;
}
