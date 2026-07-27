import Tibia1098SeasonalStatusKeywordPage, { generateMetadata } from './tibia-10-98-seasonal-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098SeasonalStatusKeywordPage />;
}
