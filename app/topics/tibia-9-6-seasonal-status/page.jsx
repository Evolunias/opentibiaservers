import Tibia96SeasonalStatusKeywordPage, { generateMetadata } from './tibia-9-6-seasonal-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96SeasonalStatusKeywordPage />;
}
