import CarlinotServerKeywordPage, { generateMetadata } from './carlinot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotServerKeywordPage />;
}
