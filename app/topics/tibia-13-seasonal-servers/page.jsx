import Tibia13SeasonalServersKeywordPage, { generateMetadata } from './tibia-13-seasonal-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13SeasonalServersKeywordPage />;
}
