import Tibia13SeasonalOtServerKeywordPage, { generateMetadata } from './tibia-13-seasonal-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13SeasonalOtServerKeywordPage />;
}
