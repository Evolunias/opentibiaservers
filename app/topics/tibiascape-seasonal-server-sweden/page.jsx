import TibiascapeSeasonalServerSwedenKeywordPage, { generateMetadata } from './tibiascape-seasonal-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeSeasonalServerSwedenKeywordPage />;
}
