import Carlinot76SeasonalServerKeywordPage, { generateMetadata } from './carlinot-7-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Carlinot76SeasonalServerKeywordPage />;
}
