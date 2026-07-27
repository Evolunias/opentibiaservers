import ArcaniarlRealMapServerArgentinaKeywordPage, { generateMetadata } from './arcaniarl-real-map-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlRealMapServerArgentinaKeywordPage />;
}
