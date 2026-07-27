import Marolaot80SeasonalServerKeywordPage, { generateMetadata } from './marolaot-8-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Marolaot80SeasonalServerKeywordPage />;
}
