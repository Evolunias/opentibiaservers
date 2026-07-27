import HarmoniaOt84SeasonalServerKeywordPage, { generateMetadata } from './harmonia-ot-8-4-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt84SeasonalServerKeywordPage />;
}
