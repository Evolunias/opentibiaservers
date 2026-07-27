import Tibia13SeasonalOpenTibiaServerKeywordPage, { generateMetadata } from './tibia-13-seasonal-open-tibia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13SeasonalOpenTibiaServerKeywordPage />;
}
