import CarlinotCustomMapServerArgentinaKeywordPage, { generateMetadata } from './carlinot-custom-map-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotCustomMapServerArgentinaKeywordPage />;
}
