import Tibia772SeasonalServersKeywordPage, { generateMetadata } from './tibia-7-72-seasonal-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772SeasonalServersKeywordPage />;
}
