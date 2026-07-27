import Tibia96SeasonalClientKeywordPage, { generateMetadata } from './tibia-9-6-seasonal-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96SeasonalClientKeywordPage />;
}
