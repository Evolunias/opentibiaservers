import Tibia74SeasonalGuideKeywordPage, { generateMetadata } from './tibia-7-4-seasonal-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74SeasonalGuideKeywordPage />;
}
