import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-no-reset-server-france');
}

export default function EmpirebrNoResetServerFranceKeywordPage() {
  return <StaticKeywordPage slug="empirebr-no-reset-server-france" />;
}
