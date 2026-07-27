import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-real-map-servers-poland');
}

export default function ElderaRealMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="eldera-real-map-servers-poland" />;
}
