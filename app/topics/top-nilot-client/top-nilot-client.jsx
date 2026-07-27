import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-nilot-client');
}

export default function TopNilotClientKeywordPage() {
  return <StaticKeywordPage slug="top-nilot-client" />;
}
