import Tibia14SeasonalServerKeywordPage, { generateMetadata } from './tibia-14-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14SeasonalServerKeywordPage />;
}
