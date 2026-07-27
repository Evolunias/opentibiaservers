import CarlinotTrailerKeywordPage, { generateMetadata } from './carlinot-trailer';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotTrailerKeywordPage />;
}
