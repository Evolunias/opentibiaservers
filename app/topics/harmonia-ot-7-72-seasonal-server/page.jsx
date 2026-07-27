import HarmoniaOt772SeasonalServerKeywordPage, { generateMetadata } from './harmonia-ot-7-72-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt772SeasonalServerKeywordPage />;
}
