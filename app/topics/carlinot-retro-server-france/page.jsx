import CarlinotRetroServerFranceKeywordPage, { generateMetadata } from './carlinot-retro-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotRetroServerFranceKeywordPage />;
}
