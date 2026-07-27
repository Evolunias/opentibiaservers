import CarlinotLatinAmericaServerKeywordPage, { generateMetadata } from './carlinot-latin-america-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotLatinAmericaServerKeywordPage />;
}
