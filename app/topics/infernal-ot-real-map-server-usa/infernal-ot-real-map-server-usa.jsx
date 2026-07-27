import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-real-map-server-usa');
}

export default function InfernalOtRealMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-real-map-server-usa" />;
}
