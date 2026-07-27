import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-14-custom-map-server');
}

export default function Evolunia14CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-14-custom-map-server" />;
}
