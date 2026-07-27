import CarlinotChileServersKeywordPage, { generateMetadata } from './carlinot-chile-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotChileServersKeywordPage />;
}
