import Marolaot11SeasonalServerKeywordPage, { generateMetadata } from './marolaot-11-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Marolaot11SeasonalServerKeywordPage />;
}
