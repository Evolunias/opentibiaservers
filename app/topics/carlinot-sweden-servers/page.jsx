import CarlinotSwedenServersKeywordPage, { generateMetadata } from './carlinot-sweden-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotSwedenServersKeywordPage />;
}
