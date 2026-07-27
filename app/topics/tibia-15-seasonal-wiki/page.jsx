import Tibia15SeasonalWikiKeywordPage, { generateMetadata } from './tibia-15-seasonal-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15SeasonalWikiKeywordPage />;
}
