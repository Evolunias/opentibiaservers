import CarlinotMexicoServerKeywordPage, { generateMetadata } from './carlinot-mexico-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotMexicoServerKeywordPage />;
}
