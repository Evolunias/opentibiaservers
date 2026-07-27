import HarmoniaOt71SeasonalServerKeywordPage, { generateMetadata } from './harmonia-ot-7-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt71SeasonalServerKeywordPage />;
}
