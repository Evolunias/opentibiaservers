import HarmoniaOt13SeasonalServerKeywordPage, { generateMetadata } from './harmonia-ot-13-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt13SeasonalServerKeywordPage />;
}
