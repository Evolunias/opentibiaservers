import HarmoniaOt76SeasonalServerKeywordPage, { generateMetadata } from './harmonia-ot-7-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt76SeasonalServerKeywordPage />;
}
