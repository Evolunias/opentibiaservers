import Tibia12SeasonalOpenTibiaServerKeywordPage, { generateMetadata } from './tibia-12-seasonal-open-tibia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12SeasonalOpenTibiaServerKeywordPage />;
}
