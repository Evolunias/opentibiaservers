import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-11-custom-map-server');
}

export default function InfernalOt11CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-11-custom-map-server" />;
}
