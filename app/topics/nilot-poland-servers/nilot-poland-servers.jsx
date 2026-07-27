import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-poland-servers');
}

export default function NilotPolandServersKeywordPage() {
  return <StaticKeywordPage slug="nilot-poland-servers" />;
}
