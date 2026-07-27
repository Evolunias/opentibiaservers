import Carlinot84SeasonalServerKeywordPage, { generateMetadata } from './carlinot-8-4-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Carlinot84SeasonalServerKeywordPage />;
}
