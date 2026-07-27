import Tibia12SeasonalClientKeywordPage, { generateMetadata } from './tibia-12-seasonal-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12SeasonalClientKeywordPage />;
}
