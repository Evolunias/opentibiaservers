import Tibia96SeasonalOtServerKeywordPage, { generateMetadata } from './tibia-9-6-seasonal-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96SeasonalOtServerKeywordPage />;
}
