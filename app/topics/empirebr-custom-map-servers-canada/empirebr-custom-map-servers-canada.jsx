import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-custom-map-servers-canada');
}

export default function EmpirebrCustomMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-custom-map-servers-canada" />;
}
