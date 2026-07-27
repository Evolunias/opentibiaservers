import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-custom-map-server-sweden');
}

export default function ClassickDrakoriaCustomMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-custom-map-server-sweden" />;
}
