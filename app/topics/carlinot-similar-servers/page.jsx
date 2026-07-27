import CarlinotSimilarServersKeywordPage, { generateMetadata } from './carlinot-similar-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotSimilarServersKeywordPage />;
}
