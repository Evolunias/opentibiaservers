import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-7-1-custom-map-server');
}

export default function InfernalOt71CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-7-1-custom-map-server" />;
}
