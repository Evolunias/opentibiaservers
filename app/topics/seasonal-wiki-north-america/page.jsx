import SeasonalWikiNorthAmericaKeywordPage, { generateMetadata } from './seasonal-wiki-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalWikiNorthAmericaKeywordPage />;
}
