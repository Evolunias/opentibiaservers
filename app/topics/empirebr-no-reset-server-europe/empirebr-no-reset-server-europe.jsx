import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-no-reset-server-europe');
}

export default function EmpirebrNoResetServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="empirebr-no-reset-server-europe" />;
}
