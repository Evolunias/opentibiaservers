import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-real-map-servers-latin-america');
}

export default function EmpirebrRealMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-real-map-servers-latin-america" />;
}
