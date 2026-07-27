import Tibia76SeasonalServerKeywordPage, { generateMetadata } from './tibia-7-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76SeasonalServerKeywordPage />;
}
