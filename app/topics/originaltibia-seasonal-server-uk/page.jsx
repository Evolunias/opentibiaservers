import OriginaltibiaSeasonalServerUkKeywordPage, { generateMetadata } from './originaltibia-seasonal-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OriginaltibiaSeasonalServerUkKeywordPage />;
}
