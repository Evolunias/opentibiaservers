import EvoluniaCustomMapServerCanadaKeywordPage, { generateMetadata } from './evolunia-custom-map-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaCustomMapServerCanadaKeywordPage />;
}
