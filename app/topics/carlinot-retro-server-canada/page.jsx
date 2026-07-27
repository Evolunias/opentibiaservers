import CarlinotRetroServerCanadaKeywordPage, { generateMetadata } from './carlinot-retro-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotRetroServerCanadaKeywordPage />;
}
