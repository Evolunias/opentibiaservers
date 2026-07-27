import OriginaltibiaSeasonalServerCanadaKeywordPage, { generateMetadata } from './originaltibia-seasonal-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OriginaltibiaSeasonalServerCanadaKeywordPage />;
}
