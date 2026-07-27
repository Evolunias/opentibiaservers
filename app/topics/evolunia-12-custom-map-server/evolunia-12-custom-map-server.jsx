import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-12-custom-map-server');
}

export default function Evolunia12CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-12-custom-map-server" />;
}
