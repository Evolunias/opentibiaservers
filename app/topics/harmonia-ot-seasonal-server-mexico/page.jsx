import HarmoniaOtSeasonalServerMexicoKeywordPage, { generateMetadata } from './harmonia-ot-seasonal-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOtSeasonalServerMexicoKeywordPage />;
}
