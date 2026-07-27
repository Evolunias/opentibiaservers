import MediviaSeasonalServerArgentinaKeywordPage, { generateMetadata } from './medivia-seasonal-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaSeasonalServerArgentinaKeywordPage />;
}
