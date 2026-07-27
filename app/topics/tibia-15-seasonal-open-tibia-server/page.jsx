import Tibia15SeasonalOpenTibiaServerKeywordPage, { generateMetadata } from './tibia-15-seasonal-open-tibia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15SeasonalOpenTibiaServerKeywordPage />;
}
