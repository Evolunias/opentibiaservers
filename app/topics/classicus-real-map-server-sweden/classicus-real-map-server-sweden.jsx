import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-real-map-server-sweden');
}

export default function ClassicusRealMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="classicus-real-map-server-sweden" />;
}
