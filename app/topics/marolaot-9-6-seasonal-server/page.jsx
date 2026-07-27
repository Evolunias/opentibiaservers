import Marolaot96SeasonalServerKeywordPage, { generateMetadata } from './marolaot-9-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Marolaot96SeasonalServerKeywordPage />;
}
