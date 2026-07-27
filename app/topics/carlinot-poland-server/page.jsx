import CarlinotPolandServerKeywordPage, { generateMetadata } from './carlinot-poland-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotPolandServerKeywordPage />;
}
