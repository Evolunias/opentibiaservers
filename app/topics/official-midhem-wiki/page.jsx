import OfficialMidhemWikiKeywordPage, { generateMetadata } from './official-midhem-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMidhemWikiKeywordPage />;
}
