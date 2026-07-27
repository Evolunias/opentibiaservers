import Tibia96SeasonalServersKeywordPage, { generateMetadata } from './tibia-9-6-seasonal-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96SeasonalServersKeywordPage />;
}
