import HarmoniaOt74SeasonalServerKeywordPage, { generateMetadata } from './harmonia-ot-7-4-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt74SeasonalServerKeywordPage />;
}
