import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-8-0-custom-map-server');
}

export default function Evolunia80CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-8-0-custom-map-server" />;
}
