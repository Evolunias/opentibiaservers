import Tibia71SeasonalServersKeywordPage, { generateMetadata } from './tibia-7-1-seasonal-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71SeasonalServersKeywordPage />;
}
