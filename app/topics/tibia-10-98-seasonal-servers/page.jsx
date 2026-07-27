import Tibia1098SeasonalServersKeywordPage, { generateMetadata } from './tibia-10-98-seasonal-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098SeasonalServersKeywordPage />;
}
