import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-europe-server');
}

export default function EmpirebrEuropeServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-europe-server" />;
}
