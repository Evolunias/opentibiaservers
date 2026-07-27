import Tibia14SeasonalStatusKeywordPage, { generateMetadata } from './tibia-14-seasonal-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14SeasonalStatusKeywordPage />;
}
