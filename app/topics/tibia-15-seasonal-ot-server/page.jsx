import Tibia15SeasonalOtServerKeywordPage, { generateMetadata } from './tibia-15-seasonal-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15SeasonalOtServerKeywordPage />;
}
