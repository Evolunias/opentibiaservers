import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-real-map-server-poland');
}

export default function MiracleRealMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="miracle-real-map-server-poland" />;
}
