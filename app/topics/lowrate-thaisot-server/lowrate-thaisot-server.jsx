import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-thaisot-server');
}

export default function LowrateThaisotServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-thaisot-server" />;
}
