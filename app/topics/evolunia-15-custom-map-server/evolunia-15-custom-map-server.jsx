import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-15-custom-map-server');
}

export default function Evolunia15CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-15-custom-map-server" />;
}
