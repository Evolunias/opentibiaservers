import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-nilot-client');
}

export default function CurrentNilotClientKeywordPage() {
  return <StaticKeywordPage slug="current-nilot-client" />;
}
