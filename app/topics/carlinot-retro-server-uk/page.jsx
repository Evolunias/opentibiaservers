import CarlinotRetroServerUkKeywordPage, { generateMetadata } from './carlinot-retro-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotRetroServerUkKeywordPage />;
}
