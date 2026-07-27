import Carlinot96SeasonalServerKeywordPage, { generateMetadata } from './carlinot-9-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Carlinot96SeasonalServerKeywordPage />;
}
