import CarlinotGermanyServersKeywordPage, { generateMetadata } from './carlinot-germany-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotGermanyServersKeywordPage />;
}
