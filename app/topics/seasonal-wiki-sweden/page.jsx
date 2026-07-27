import SeasonalWikiSwedenKeywordPage, { generateMetadata } from './seasonal-wiki-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalWikiSwedenKeywordPage />;
}
