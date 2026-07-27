import Tibia14SeasonalServersKeywordPage, { generateMetadata } from './tibia-14-seasonal-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14SeasonalServersKeywordPage />;
}
