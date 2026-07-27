import Tibia100SeasonalStatusKeywordPage, { generateMetadata } from './tibia-10-0-seasonal-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100SeasonalStatusKeywordPage />;
}
