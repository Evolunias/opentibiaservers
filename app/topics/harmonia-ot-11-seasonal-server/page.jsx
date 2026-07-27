import HarmoniaOt11SeasonalServerKeywordPage, { generateMetadata } from './harmonia-ot-11-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt11SeasonalServerKeywordPage />;
}
