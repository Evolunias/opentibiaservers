import Tibia86SeasonalWikiKeywordPage, { generateMetadata } from './tibia-8-6-seasonal-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86SeasonalWikiKeywordPage />;
}
