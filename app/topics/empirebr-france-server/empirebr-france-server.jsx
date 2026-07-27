import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-france-server');
}

export default function EmpirebrFranceServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-france-server" />;
}
