import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-real-map');
}

export default function InfernalOtRealMapKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-real-map" />;
}
