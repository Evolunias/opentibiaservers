import Tibia86SeasonalOtServerKeywordPage, { generateMetadata } from './tibia-8-6-seasonal-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86SeasonalOtServerKeywordPage />;
}
