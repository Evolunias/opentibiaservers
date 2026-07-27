import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-nilot-client');
}

export default function LowrateNilotClientKeywordPage() {
  return <StaticKeywordPage slug="lowrate-nilot-client" />;
}
