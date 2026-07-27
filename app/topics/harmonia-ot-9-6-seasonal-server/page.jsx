import HarmoniaOt96SeasonalServerKeywordPage, { generateMetadata } from './harmonia-ot-9-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt96SeasonalServerKeywordPage />;
}
