import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-7-1-custom-map-server');
}

export default function Evolunia71CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-7-1-custom-map-server" />;
}
