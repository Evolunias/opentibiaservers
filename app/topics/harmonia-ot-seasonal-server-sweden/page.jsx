import HarmoniaOtSeasonalServerSwedenKeywordPage, { generateMetadata } from './harmonia-ot-seasonal-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOtSeasonalServerSwedenKeywordPage />;
}
