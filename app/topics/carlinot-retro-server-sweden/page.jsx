import CarlinotRetroServerSwedenKeywordPage, { generateMetadata } from './carlinot-retro-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotRetroServerSwedenKeywordPage />;
}
