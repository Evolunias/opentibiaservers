import OfficialUnlineWikiKeywordPage, { generateMetadata } from './official-unline-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialUnlineWikiKeywordPage />;
}
