import Tibia84SeasonalStatusKeywordPage, { generateMetadata } from './tibia-8-4-seasonal-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84SeasonalStatusKeywordPage />;
}
