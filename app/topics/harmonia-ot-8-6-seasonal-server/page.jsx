import HarmoniaOt86SeasonalServerKeywordPage, { generateMetadata } from './harmonia-ot-8-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt86SeasonalServerKeywordPage />;
}
