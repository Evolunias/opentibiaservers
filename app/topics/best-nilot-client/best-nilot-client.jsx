import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-nilot-client');
}

export default function BestNilotClientKeywordPage() {
  return <StaticKeywordPage slug="best-nilot-client" />;
}
