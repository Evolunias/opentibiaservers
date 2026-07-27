import Tibia14SeasonalOtServerKeywordPage, { generateMetadata } from './tibia-14-seasonal-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14SeasonalOtServerKeywordPage />;
}
