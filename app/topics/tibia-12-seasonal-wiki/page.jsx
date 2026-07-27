import Tibia12SeasonalWikiKeywordPage, { generateMetadata } from './tibia-12-seasonal-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12SeasonalWikiKeywordPage />;
}
