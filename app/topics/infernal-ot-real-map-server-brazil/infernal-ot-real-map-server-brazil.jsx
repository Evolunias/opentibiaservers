import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-real-map-server-brazil');
}

export default function InfernalOtRealMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-real-map-server-brazil" />;
}
