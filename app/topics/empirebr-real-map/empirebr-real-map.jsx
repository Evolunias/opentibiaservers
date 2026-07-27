import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-real-map');
}

export default function EmpirebrRealMapKeywordPage() {
  return <StaticKeywordPage slug="empirebr-real-map" />;
}
