import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-7-4-custom-map-server');
}

export default function Evolera74CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-7-4-custom-map-server" />;
}
