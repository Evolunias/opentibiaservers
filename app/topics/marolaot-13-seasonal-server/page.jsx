import Marolaot13SeasonalServerKeywordPage, { generateMetadata } from './marolaot-13-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Marolaot13SeasonalServerKeywordPage />;
}
