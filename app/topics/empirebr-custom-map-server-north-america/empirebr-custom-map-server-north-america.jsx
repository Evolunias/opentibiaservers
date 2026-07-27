import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-custom-map-server-north-america');
}

export default function EmpirebrCustomMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-custom-map-server-north-america" />;
}
