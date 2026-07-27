import Tibia772SeasonalStatusKeywordPage, { generateMetadata } from './tibia-7-72-seasonal-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772SeasonalStatusKeywordPage />;
}
