import CarlinotLoginKeywordPage, { generateMetadata } from './carlinot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotLoginKeywordPage />;
}
