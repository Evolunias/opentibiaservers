import CarlinotGermanyServerKeywordPage, { generateMetadata } from './carlinot-germany-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotGermanyServerKeywordPage />;
}
