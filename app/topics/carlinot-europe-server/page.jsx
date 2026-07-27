import CarlinotEuropeServerKeywordPage, { generateMetadata } from './carlinot-europe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotEuropeServerKeywordPage />;
}
