import Carlinot86SeasonalServerKeywordPage, { generateMetadata } from './carlinot-8-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Carlinot86SeasonalServerKeywordPage />;
}
