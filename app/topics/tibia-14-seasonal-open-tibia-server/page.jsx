import Tibia14SeasonalOpenTibiaServerKeywordPage, { generateMetadata } from './tibia-14-seasonal-open-tibia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14SeasonalOpenTibiaServerKeywordPage />;
}
