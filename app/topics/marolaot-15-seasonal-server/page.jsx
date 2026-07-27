import Marolaot15SeasonalServerKeywordPage, { generateMetadata } from './marolaot-15-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Marolaot15SeasonalServerKeywordPage />;
}
