import Tibia1098SeasonalOtServerKeywordPage, { generateMetadata } from './tibia-10-98-seasonal-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098SeasonalOtServerKeywordPage />;
}
