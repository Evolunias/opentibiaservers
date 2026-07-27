import CarlinotMarketKeywordPage, { generateMetadata } from './carlinot-market';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotMarketKeywordPage />;
}
