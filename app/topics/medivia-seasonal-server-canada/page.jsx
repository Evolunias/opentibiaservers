import MediviaSeasonalServerCanadaKeywordPage, { generateMetadata } from './medivia-seasonal-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaSeasonalServerCanadaKeywordPage />;
}
