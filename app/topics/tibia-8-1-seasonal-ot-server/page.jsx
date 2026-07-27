import Tibia81SeasonalOtServerKeywordPage, { generateMetadata } from './tibia-8-1-seasonal-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81SeasonalOtServerKeywordPage />;
}
