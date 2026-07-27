import Tibia80SeasonalOpenTibiaServerKeywordPage, { generateMetadata } from './tibia-8-0-seasonal-open-tibia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80SeasonalOpenTibiaServerKeywordPage />;
}
