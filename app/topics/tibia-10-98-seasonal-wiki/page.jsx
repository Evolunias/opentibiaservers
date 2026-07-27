import Tibia1098SeasonalWikiKeywordPage, { generateMetadata } from './tibia-10-98-seasonal-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098SeasonalWikiKeywordPage />;
}
