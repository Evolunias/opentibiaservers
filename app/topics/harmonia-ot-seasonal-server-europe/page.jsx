import HarmoniaOtSeasonalServerEuropeKeywordPage, { generateMetadata } from './harmonia-ot-seasonal-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOtSeasonalServerEuropeKeywordPage />;
}
