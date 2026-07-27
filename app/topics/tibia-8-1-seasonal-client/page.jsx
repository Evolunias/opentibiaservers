import Tibia81SeasonalClientKeywordPage, { generateMetadata } from './tibia-8-1-seasonal-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81SeasonalClientKeywordPage />;
}
