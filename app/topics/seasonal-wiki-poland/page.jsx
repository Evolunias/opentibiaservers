import SeasonalWikiPolandKeywordPage, { generateMetadata } from './seasonal-wiki-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalWikiPolandKeywordPage />;
}
