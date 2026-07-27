import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-nilot-server');
}

export default function LowrateNilotServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-nilot-server" />;
}
