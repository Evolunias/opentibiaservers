import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-map');
}

export default function InfernalOtMapKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-map" />;
}
