import ImperianicSeasonalServerArgentinaKeywordPage, { generateMetadata } from './imperianic-seasonal-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ImperianicSeasonalServerArgentinaKeywordPage />;
}
