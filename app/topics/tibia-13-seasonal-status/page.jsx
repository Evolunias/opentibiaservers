import Tibia13SeasonalStatusKeywordPage, { generateMetadata } from './tibia-13-seasonal-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13SeasonalStatusKeywordPage />;
}
