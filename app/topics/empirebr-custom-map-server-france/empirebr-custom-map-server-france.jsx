import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-custom-map-server-france');
}

export default function EmpirebrCustomMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="empirebr-custom-map-server-france" />;
}
