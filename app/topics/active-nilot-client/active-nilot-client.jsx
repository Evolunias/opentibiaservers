import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-nilot-client');
}

export default function ActiveNilotClientKeywordPage() {
  return <StaticKeywordPage slug="active-nilot-client" />;
}
