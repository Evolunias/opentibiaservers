import Tibia12SeasonalOtServerKeywordPage, { generateMetadata } from './tibia-12-seasonal-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12SeasonalOtServerKeywordPage />;
}
