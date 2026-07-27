import Tibia71SeasonalClientKeywordPage, { generateMetadata } from './tibia-7-1-seasonal-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71SeasonalClientKeywordPage />;
}
