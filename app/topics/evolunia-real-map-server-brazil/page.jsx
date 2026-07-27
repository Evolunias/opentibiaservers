import EvoluniaRealMapServerBrazilKeywordPage, { generateMetadata } from './evolunia-real-map-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaRealMapServerBrazilKeywordPage />;
}
