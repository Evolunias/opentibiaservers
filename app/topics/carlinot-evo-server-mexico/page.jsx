import CarlinotEvoServerMexicoKeywordPage, { generateMetadata } from './carlinot-evo-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotEvoServerMexicoKeywordPage />;
}
