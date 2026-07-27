import Tibia76SeasonalServersKeywordPage, { generateMetadata } from './tibia-7-6-seasonal-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76SeasonalServersKeywordPage />;
}
