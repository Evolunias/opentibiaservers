import Tibia11SeasonalServersKeywordPage, { generateMetadata } from './tibia-11-seasonal-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11SeasonalServersKeywordPage />;
}
