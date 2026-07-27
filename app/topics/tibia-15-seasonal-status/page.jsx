import Tibia15SeasonalStatusKeywordPage, { generateMetadata } from './tibia-15-seasonal-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15SeasonalStatusKeywordPage />;
}
