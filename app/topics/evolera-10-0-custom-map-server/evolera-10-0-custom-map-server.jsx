import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-10-0-custom-map-server');
}

export default function Evolera100CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-10-0-custom-map-server" />;
}
