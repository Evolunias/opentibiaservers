import HarmoniaOtSeasonalServerCanadaKeywordPage, { generateMetadata } from './harmonia-ot-seasonal-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOtSeasonalServerCanadaKeywordPage />;
}
