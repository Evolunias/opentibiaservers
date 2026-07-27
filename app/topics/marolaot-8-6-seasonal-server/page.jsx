import Marolaot86SeasonalServerKeywordPage, { generateMetadata } from './marolaot-8-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Marolaot86SeasonalServerKeywordPage />;
}
