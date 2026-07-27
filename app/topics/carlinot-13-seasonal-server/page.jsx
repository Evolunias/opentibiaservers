import Carlinot13SeasonalServerKeywordPage, { generateMetadata } from './carlinot-13-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Carlinot13SeasonalServerKeywordPage />;
}
