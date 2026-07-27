import CarlinotEvoServerBrazilKeywordPage, { generateMetadata } from './carlinot-evo-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotEvoServerBrazilKeywordPage />;
}
