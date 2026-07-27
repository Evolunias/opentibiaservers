import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-nilot-client');
}

export default function CustomNilotClientKeywordPage() {
  return <StaticKeywordPage slug="custom-nilot-client" />;
}
