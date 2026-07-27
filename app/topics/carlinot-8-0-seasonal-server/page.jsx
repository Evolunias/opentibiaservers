import Carlinot80SeasonalServerKeywordPage, { generateMetadata } from './carlinot-8-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Carlinot80SeasonalServerKeywordPage />;
}
