import ArcaniarlCustomMapServerArgentinaKeywordPage, { generateMetadata } from './arcaniarl-custom-map-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlCustomMapServerArgentinaKeywordPage />;
}
