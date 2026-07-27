import MediviaSeasonalServerMexicoKeywordPage, { generateMetadata } from './medivia-seasonal-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaSeasonalServerMexicoKeywordPage />;
}
