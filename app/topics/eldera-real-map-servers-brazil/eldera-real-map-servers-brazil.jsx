import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-real-map-servers-brazil');
}

export default function ElderaRealMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="eldera-real-map-servers-brazil" />;
}
