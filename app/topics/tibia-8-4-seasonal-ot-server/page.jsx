import Tibia84SeasonalOtServerKeywordPage, { generateMetadata } from './tibia-8-4-seasonal-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84SeasonalOtServerKeywordPage />;
}
