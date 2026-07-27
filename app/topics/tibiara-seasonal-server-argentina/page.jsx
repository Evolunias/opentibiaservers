import TibiaraSeasonalServerArgentinaKeywordPage, { generateMetadata } from './tibiara-seasonal-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraSeasonalServerArgentinaKeywordPage />;
}
