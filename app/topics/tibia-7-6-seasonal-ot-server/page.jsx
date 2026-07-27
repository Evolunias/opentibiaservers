import Tibia76SeasonalOtServerKeywordPage, { generateMetadata } from './tibia-7-6-seasonal-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76SeasonalOtServerKeywordPage />;
}
