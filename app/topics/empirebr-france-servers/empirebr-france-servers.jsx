import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-france-servers');
}

export default function EmpirebrFranceServersKeywordPage() {
  return <StaticKeywordPage slug="empirebr-france-servers" />;
}
