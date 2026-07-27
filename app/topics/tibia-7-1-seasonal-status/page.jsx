import Tibia71SeasonalStatusKeywordPage, { generateMetadata } from './tibia-7-1-seasonal-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71SeasonalStatusKeywordPage />;
}
