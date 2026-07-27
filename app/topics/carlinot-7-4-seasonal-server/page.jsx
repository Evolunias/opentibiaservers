import Carlinot74SeasonalServerKeywordPage, { generateMetadata } from './carlinot-7-4-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Carlinot74SeasonalServerKeywordPage />;
}
