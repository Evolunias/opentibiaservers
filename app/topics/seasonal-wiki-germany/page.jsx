import SeasonalWikiGermanyKeywordPage, { generateMetadata } from './seasonal-wiki-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalWikiGermanyKeywordPage />;
}
