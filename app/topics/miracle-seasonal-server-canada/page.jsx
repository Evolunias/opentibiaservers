import MiracleSeasonalServerCanadaKeywordPage, { generateMetadata } from './miracle-seasonal-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MiracleSeasonalServerCanadaKeywordPage />;
}
