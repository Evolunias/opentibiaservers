import Carlinot11SeasonalServerKeywordPage, { generateMetadata } from './carlinot-11-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Carlinot11SeasonalServerKeywordPage />;
}
