import CarlinotArgentinaServersKeywordPage, { generateMetadata } from './carlinot-argentina-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotArgentinaServersKeywordPage />;
}
