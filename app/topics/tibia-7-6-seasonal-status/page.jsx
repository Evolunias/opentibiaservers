import Tibia76SeasonalStatusKeywordPage, { generateMetadata } from './tibia-7-6-seasonal-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76SeasonalStatusKeywordPage />;
}
