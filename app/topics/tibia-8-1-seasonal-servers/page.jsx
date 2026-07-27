import Tibia81SeasonalServersKeywordPage, { generateMetadata } from './tibia-8-1-seasonal-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81SeasonalServersKeywordPage />;
}
