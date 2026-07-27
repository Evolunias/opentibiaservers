import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-11-custom-map-server');
}

export default function Evolunia11CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-11-custom-map-server" />;
}
