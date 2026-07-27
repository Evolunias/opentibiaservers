import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-custom-map-server-germany');
}

export default function EmpirebrCustomMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="empirebr-custom-map-server-germany" />;
}
