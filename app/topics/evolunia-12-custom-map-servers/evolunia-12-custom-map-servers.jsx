import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-12-custom-map-servers');
}

export default function Evolunia12CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="evolunia-12-custom-map-servers" />;
}
