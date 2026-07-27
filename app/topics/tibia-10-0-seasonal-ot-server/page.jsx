import Tibia100SeasonalOtServerKeywordPage, { generateMetadata } from './tibia-10-0-seasonal-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100SeasonalOtServerKeywordPage />;
}
