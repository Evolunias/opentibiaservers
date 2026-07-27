import CarlinotBrazilServerKeywordPage, { generateMetadata } from './carlinot-brazil-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotBrazilServerKeywordPage />;
}
