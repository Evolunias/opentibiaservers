import CarlinotRetroServerLatinAmericaKeywordPage, { generateMetadata } from './carlinot-retro-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotRetroServerLatinAmericaKeywordPage />;
}
