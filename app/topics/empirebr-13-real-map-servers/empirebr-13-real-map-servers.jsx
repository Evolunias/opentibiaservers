import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-13-real-map-servers');
}

export default function Empirebr13RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="empirebr-13-real-map-servers" />;
}
