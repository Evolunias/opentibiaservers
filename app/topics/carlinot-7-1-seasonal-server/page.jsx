import Carlinot71SeasonalServerKeywordPage, { generateMetadata } from './carlinot-7-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Carlinot71SeasonalServerKeywordPage />;
}
