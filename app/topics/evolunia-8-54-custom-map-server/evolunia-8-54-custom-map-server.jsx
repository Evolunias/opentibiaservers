import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-8-54-custom-map-server');
}

export default function Evolunia854CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-8-54-custom-map-server" />;
}
