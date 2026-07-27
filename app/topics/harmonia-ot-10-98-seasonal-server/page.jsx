import HarmoniaOt1098SeasonalServerKeywordPage, { generateMetadata } from './harmonia-ot-10-98-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt1098SeasonalServerKeywordPage />;
}
