import CarlinotAlternativesKeywordPage, { generateMetadata } from './carlinot-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotAlternativesKeywordPage />;
}
