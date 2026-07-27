import Carlinot14SeasonalServerKeywordPage, { generateMetadata } from './carlinot-14-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Carlinot14SeasonalServerKeywordPage />;
}
