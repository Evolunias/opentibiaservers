import Tibia81SeasonalStatusKeywordPage, { generateMetadata } from './tibia-8-1-seasonal-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81SeasonalStatusKeywordPage />;
}
