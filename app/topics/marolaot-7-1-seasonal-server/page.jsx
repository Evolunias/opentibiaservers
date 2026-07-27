import Marolaot71SeasonalServerKeywordPage, { generateMetadata } from './marolaot-7-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Marolaot71SeasonalServerKeywordPage />;
}
