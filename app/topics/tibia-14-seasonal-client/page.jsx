import Tibia14SeasonalClientKeywordPage, { generateMetadata } from './tibia-14-seasonal-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14SeasonalClientKeywordPage />;
}
