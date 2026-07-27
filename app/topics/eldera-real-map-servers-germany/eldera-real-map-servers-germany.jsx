import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-real-map-servers-germany');
}

export default function ElderaRealMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="eldera-real-map-servers-germany" />;
}
