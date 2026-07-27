import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-poland-server');
}

export default function NilotPolandServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-poland-server" />;
}
