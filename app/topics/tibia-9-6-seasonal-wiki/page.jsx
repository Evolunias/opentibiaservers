import Tibia96SeasonalWikiKeywordPage, { generateMetadata } from './tibia-9-6-seasonal-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96SeasonalWikiKeywordPage />;
}
