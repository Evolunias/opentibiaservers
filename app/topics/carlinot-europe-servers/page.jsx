import CarlinotEuropeServersKeywordPage, { generateMetadata } from './carlinot-europe-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotEuropeServersKeywordPage />;
}
