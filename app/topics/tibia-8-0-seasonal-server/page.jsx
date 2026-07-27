import Tibia80SeasonalServerKeywordPage, { generateMetadata } from './tibia-8-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80SeasonalServerKeywordPage />;
}
