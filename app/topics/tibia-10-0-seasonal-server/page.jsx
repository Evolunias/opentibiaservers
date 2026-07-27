import Tibia100SeasonalServerKeywordPage, { generateMetadata } from './tibia-10-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100SeasonalServerKeywordPage />;
}
