import Tibia1098SeasonalClientKeywordPage, { generateMetadata } from './tibia-10-98-seasonal-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098SeasonalClientKeywordPage />;
}
