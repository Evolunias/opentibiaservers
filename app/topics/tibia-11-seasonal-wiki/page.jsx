import Tibia11SeasonalWikiKeywordPage, { generateMetadata } from './tibia-11-seasonal-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11SeasonalWikiKeywordPage />;
}
