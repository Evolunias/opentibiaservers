import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-custom-map-servers-north-america');
}

export default function EmpirebrCustomMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-custom-map-servers-north-america" />;
}
