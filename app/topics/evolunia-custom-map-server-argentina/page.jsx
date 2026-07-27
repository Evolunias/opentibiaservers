import EvoluniaCustomMapServerArgentinaKeywordPage, { generateMetadata } from './evolunia-custom-map-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaCustomMapServerArgentinaKeywordPage />;
}
