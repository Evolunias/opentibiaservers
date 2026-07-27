import ArcaniarlCustomMapServerSwedenKeywordPage, { generateMetadata } from './arcaniarl-custom-map-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlCustomMapServerSwedenKeywordPage />;
}
