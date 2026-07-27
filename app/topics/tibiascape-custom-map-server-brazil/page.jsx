import TibiascapeCustomMapServerBrazilKeywordPage, { generateMetadata } from './tibiascape-custom-map-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeCustomMapServerBrazilKeywordPage />;
}
