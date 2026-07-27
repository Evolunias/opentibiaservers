import Tibia81SeasonalServerKeywordPage, { generateMetadata } from './tibia-8-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81SeasonalServerKeywordPage />;
}
