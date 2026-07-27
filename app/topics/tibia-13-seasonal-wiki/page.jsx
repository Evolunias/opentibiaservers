import Tibia13SeasonalWikiKeywordPage, { generateMetadata } from './tibia-13-seasonal-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13SeasonalWikiKeywordPage />;
}
