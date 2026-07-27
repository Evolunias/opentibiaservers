import Tibia11SeasonalStatusKeywordPage, { generateMetadata } from './tibia-11-seasonal-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11SeasonalStatusKeywordPage />;
}
