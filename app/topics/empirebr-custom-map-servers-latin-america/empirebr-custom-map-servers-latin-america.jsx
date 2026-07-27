import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-custom-map-servers-latin-america');
}

export default function EmpirebrCustomMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-custom-map-servers-latin-america" />;
}
