import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-custom-map-servers-usa');
}

export default function EmpirebrCustomMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-custom-map-servers-usa" />;
}
