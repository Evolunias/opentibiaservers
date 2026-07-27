import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-europe-servers');
}

export default function EmpirebrEuropeServersKeywordPage() {
  return <StaticKeywordPage slug="empirebr-europe-servers" />;
}
