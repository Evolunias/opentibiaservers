import TibiaraSeasonalServerUkKeywordPage, { generateMetadata } from './tibiara-seasonal-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraSeasonalServerUkKeywordPage />;
}
