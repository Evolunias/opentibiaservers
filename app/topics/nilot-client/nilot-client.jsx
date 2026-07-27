import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-client');
}

export default function NilotClientKeywordPage() {
  return <StaticKeywordPage slug="nilot-client" />;
}
