import Tibia12SeasonalStatusKeywordPage, { generateMetadata } from './tibia-12-seasonal-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12SeasonalStatusKeywordPage />;
}
