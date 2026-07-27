import CarlinotBaiakServerMexicoKeywordPage, { generateMetadata } from './carlinot-baiak-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotBaiakServerMexicoKeywordPage />;
}
