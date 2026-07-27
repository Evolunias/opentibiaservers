import CarlinotRetroServerPolandKeywordPage, { generateMetadata } from './carlinot-retro-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotRetroServerPolandKeywordPage />;
}
