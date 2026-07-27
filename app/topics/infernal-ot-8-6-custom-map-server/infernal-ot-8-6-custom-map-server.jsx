import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-8-6-custom-map-server');
}

export default function InfernalOt86CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-8-6-custom-map-server" />;
}
