import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-custom-map-server-mexico');
}

export default function EmpirebrCustomMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="empirebr-custom-map-server-mexico" />;
}
