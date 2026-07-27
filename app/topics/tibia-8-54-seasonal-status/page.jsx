import Tibia854SeasonalStatusKeywordPage, { generateMetadata } from './tibia-8-54-seasonal-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia854SeasonalStatusKeywordPage />;
}
