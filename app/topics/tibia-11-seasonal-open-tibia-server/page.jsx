import Tibia11SeasonalOpenTibiaServerKeywordPage, { generateMetadata } from './tibia-11-seasonal-open-tibia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11SeasonalOpenTibiaServerKeywordPage />;
}
