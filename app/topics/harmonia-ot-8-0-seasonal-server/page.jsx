import HarmoniaOt80SeasonalServerKeywordPage, { generateMetadata } from './harmonia-ot-8-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt80SeasonalServerKeywordPage />;
}
