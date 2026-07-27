import CarlinotUsaServersKeywordPage, { generateMetadata } from './carlinot-usa-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotUsaServersKeywordPage />;
}
