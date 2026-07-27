import Tibia71SeasonalWikiKeywordPage, { generateMetadata } from './tibia-7-1-seasonal-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71SeasonalWikiKeywordPage />;
}
