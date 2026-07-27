import Tibia12SeasonalServersKeywordPage, { generateMetadata } from './tibia-12-seasonal-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12SeasonalServersKeywordPage />;
}
