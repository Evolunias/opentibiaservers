import Tibia11SeasonalOtServerKeywordPage, { generateMetadata } from './tibia-11-seasonal-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11SeasonalOtServerKeywordPage />;
}
