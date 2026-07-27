import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-map');
}

export default function EmpirebrMapKeywordPage() {
  return <StaticKeywordPage slug="empirebr-map" />;
}
