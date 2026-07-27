import EvoluniaCustomMapServerUsaKeywordPage, { generateMetadata } from './evolunia-custom-map-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaCustomMapServerUsaKeywordPage />;
}
