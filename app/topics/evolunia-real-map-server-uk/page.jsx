import EvoluniaRealMapServerUkKeywordPage, { generateMetadata } from './evolunia-real-map-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaRealMapServerUkKeywordPage />;
}
