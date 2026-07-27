import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-custom-map-server-argentina');
}

export default function EmpirebrCustomMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-custom-map-server-argentina" />;
}
