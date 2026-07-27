import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-custom-map-server-poland');
}

export default function EmpirebrCustomMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="empirebr-custom-map-server-poland" />;
}
