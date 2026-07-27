import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-real-map-servers-usa');
}

export default function InfernalOtRealMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-real-map-servers-usa" />;
}
