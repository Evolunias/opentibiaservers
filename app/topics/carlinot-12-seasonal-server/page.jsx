import Carlinot12SeasonalServerKeywordPage, { generateMetadata } from './carlinot-12-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Carlinot12SeasonalServerKeywordPage />;
}
