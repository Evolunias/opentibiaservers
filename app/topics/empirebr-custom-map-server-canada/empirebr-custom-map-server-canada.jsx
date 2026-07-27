import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-custom-map-server-canada');
}

export default function EmpirebrCustomMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-custom-map-server-canada" />;
}
