import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-real-map-server-latin-america');
}

export default function EmpirebrRealMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-real-map-server-latin-america" />;
}
