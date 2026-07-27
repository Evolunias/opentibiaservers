import Tibia86SeasonalStatusKeywordPage, { generateMetadata } from './tibia-8-6-seasonal-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86SeasonalStatusKeywordPage />;
}
