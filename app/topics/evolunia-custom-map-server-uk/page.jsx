import EvoluniaCustomMapServerUkKeywordPage, { generateMetadata } from './evolunia-custom-map-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaCustomMapServerUkKeywordPage />;
}
