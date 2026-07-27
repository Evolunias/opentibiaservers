import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-nilot-client');
}

export default function NewNilotClientKeywordPage() {
  return <StaticKeywordPage slug="new-nilot-client" />;
}
