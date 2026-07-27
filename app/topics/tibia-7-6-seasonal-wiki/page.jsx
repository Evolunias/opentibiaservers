import Tibia76SeasonalWikiKeywordPage, { generateMetadata } from './tibia-7-6-seasonal-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76SeasonalWikiKeywordPage />;
}
