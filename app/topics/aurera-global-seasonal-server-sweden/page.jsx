import AureraGlobalSeasonalServerSwedenKeywordPage, { generateMetadata } from './aurera-global-seasonal-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobalSeasonalServerSwedenKeywordPage />;
}
