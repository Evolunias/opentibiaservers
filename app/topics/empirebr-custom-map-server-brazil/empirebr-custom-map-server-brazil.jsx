import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-custom-map-server-brazil');
}

export default function EmpirebrCustomMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="empirebr-custom-map-server-brazil" />;
}
