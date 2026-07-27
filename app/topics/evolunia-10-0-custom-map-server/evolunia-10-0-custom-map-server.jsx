import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-10-0-custom-map-server');
}

export default function Evolunia100CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-10-0-custom-map-server" />;
}
