import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-7-4-custom-map-server');
}

export default function InfernalOt74CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-7-4-custom-map-server" />;
}
