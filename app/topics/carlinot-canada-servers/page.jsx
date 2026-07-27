import CarlinotCanadaServersKeywordPage, { generateMetadata } from './carlinot-canada-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotCanadaServersKeywordPage />;
}
