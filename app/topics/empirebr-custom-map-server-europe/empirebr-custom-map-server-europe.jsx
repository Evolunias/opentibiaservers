import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-custom-map-server-europe');
}

export default function EmpirebrCustomMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="empirebr-custom-map-server-europe" />;
}
