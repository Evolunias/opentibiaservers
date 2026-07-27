import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-13-custom-map-server');
}

export default function Evolunia13CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-13-custom-map-server" />;
}
