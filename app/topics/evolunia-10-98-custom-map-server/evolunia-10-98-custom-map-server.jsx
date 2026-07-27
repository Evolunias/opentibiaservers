import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-10-98-custom-map-server');
}

export default function Evolunia1098CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-10-98-custom-map-server" />;
}
