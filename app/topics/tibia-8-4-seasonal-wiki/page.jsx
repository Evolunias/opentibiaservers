import Tibia84SeasonalWikiKeywordPage, { generateMetadata } from './tibia-8-4-seasonal-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84SeasonalWikiKeywordPage />;
}
