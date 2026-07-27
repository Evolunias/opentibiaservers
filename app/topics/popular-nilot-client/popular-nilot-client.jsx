import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-nilot-client');
}

export default function PopularNilotClientKeywordPage() {
  return <StaticKeywordPage slug="popular-nilot-client" />;
}
