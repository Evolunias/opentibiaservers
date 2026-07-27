import SeasonalWikiUkKeywordPage, { generateMetadata } from './seasonal-wiki-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalWikiUkKeywordPage />;
}
