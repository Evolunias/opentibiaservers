import Tibia100SeasonalClientKeywordPage, { generateMetadata } from './tibia-10-0-seasonal-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100SeasonalClientKeywordPage />;
}
