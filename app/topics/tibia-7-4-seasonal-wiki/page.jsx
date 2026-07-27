import Tibia74SeasonalWikiKeywordPage, { generateMetadata } from './tibia-7-4-seasonal-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74SeasonalWikiKeywordPage />;
}
