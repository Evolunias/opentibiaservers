import CarlinotRetroServerGermanyKeywordPage, { generateMetadata } from './carlinot-retro-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotRetroServerGermanyKeywordPage />;
}
