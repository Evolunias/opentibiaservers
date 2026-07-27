import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-custom-map-servers-germany');
}

export default function EmpirebrCustomMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="empirebr-custom-map-servers-germany" />;
}
