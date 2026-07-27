import Marolaot12SeasonalServerKeywordPage, { generateMetadata } from './marolaot-12-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Marolaot12SeasonalServerKeywordPage />;
}
