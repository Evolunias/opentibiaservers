import TibiascapeCustomMapServerUkKeywordPage, { generateMetadata } from './tibiascape-custom-map-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeCustomMapServerUkKeywordPage />;
}
