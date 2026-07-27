import CarlinotFranceServerKeywordPage, { generateMetadata } from './carlinot-france-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotFranceServerKeywordPage />;
}
