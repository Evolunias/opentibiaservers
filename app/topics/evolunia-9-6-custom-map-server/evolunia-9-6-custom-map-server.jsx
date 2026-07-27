import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-9-6-custom-map-server');
}

export default function Evolunia96CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-9-6-custom-map-server" />;
}
