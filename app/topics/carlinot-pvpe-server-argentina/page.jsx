import CarlinotPvpeServerArgentinaKeywordPage, { generateMetadata } from './carlinot-pvpe-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotPvpeServerArgentinaKeywordPage />;
}
