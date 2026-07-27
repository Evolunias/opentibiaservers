import Tibia100SeasonalWikiKeywordPage, { generateMetadata } from './tibia-10-0-seasonal-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100SeasonalWikiKeywordPage />;
}
