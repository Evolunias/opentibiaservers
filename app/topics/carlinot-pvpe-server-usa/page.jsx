import CarlinotPvpeServerUsaKeywordPage, { generateMetadata } from './carlinot-pvpe-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotPvpeServerUsaKeywordPage />;
}
