import Marolaot81SeasonalServerKeywordPage, { generateMetadata } from './marolaot-8-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Marolaot81SeasonalServerKeywordPage />;
}
