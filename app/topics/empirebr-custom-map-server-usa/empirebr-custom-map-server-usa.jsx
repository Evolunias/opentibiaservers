import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-custom-map-server-usa');
}

export default function EmpirebrCustomMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-custom-map-server-usa" />;
}
