import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-15-custom-map-server');
}

export default function InfernalOt15CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-15-custom-map-server" />;
}
