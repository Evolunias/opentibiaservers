import HarmoniaOt15SeasonalServerKeywordPage, { generateMetadata } from './harmonia-ot-15-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt15SeasonalServerKeywordPage />;
}
