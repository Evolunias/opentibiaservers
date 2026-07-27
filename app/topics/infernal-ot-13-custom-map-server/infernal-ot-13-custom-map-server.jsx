import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-13-custom-map-server');
}

export default function InfernalOt13CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-13-custom-map-server" />;
}
