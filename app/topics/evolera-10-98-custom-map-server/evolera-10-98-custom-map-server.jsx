import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-10-98-custom-map-server');
}

export default function Evolera1098CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-10-98-custom-map-server" />;
}
