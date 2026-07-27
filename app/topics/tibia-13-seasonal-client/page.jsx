import Tibia13SeasonalClientKeywordPage, { generateMetadata } from './tibia-13-seasonal-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13SeasonalClientKeywordPage />;
}
