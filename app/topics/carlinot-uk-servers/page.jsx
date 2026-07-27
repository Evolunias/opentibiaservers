import CarlinotUkServersKeywordPage, { generateMetadata } from './carlinot-uk-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotUkServersKeywordPage />;
}
