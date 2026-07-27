import SeasonalWikiSouthAmericaKeywordPage, { generateMetadata } from './seasonal-wiki-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalWikiSouthAmericaKeywordPage />;
}
