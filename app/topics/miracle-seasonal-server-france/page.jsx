import MiracleSeasonalServerFranceKeywordPage, { generateMetadata } from './miracle-seasonal-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MiracleSeasonalServerFranceKeywordPage />;
}
