import CarlinotSwedenServerKeywordPage, { generateMetadata } from './carlinot-sweden-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotSwedenServerKeywordPage />;
}
