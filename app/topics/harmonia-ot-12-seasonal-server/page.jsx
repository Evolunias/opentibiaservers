import HarmoniaOt12SeasonalServerKeywordPage, { generateMetadata } from './harmonia-ot-12-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt12SeasonalServerKeywordPage />;
}
