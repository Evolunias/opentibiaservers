import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-9-6-custom-map-server');
}

export default function InfernalOt96CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-9-6-custom-map-server" />;
}
