import Tibia84SeasonalServersKeywordPage, { generateMetadata } from './tibia-8-4-seasonal-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84SeasonalServersKeywordPage />;
}
