import Tibia86SeasonalClientKeywordPage, { generateMetadata } from './tibia-8-6-seasonal-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86SeasonalClientKeywordPage />;
}
