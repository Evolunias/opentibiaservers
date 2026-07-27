import TibiantisSeasonalServerSwedenKeywordPage, { generateMetadata } from './tibiantis-seasonal-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiantisSeasonalServerSwedenKeywordPage />;
}
