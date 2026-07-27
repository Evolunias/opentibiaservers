import HarmoniaOt81SeasonalServerKeywordPage, { generateMetadata } from './harmonia-ot-8-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt81SeasonalServerKeywordPage />;
}
