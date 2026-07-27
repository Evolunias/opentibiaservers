import CarlinotWarsKeywordPage, { generateMetadata } from './carlinot-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotWarsKeywordPage />;
}
