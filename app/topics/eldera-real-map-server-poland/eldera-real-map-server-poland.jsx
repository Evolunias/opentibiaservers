import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-real-map-server-poland');
}

export default function ElderaRealMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="eldera-real-map-server-poland" />;
}
