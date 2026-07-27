import SeasonalWikiMexicoKeywordPage, { generateMetadata } from './seasonal-wiki-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalWikiMexicoKeywordPage />;
}
