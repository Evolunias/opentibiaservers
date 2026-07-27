import TibiantisRealMapServerBrazilKeywordPage, { generateMetadata } from './tibiantis-real-map-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiantisRealMapServerBrazilKeywordPage />;
}
