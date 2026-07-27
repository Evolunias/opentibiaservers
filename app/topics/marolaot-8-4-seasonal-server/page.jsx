import Marolaot84SeasonalServerKeywordPage, { generateMetadata } from './marolaot-8-4-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Marolaot84SeasonalServerKeywordPage />;
}
