import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-europe-servers');
}

export default function NilotEuropeServersKeywordPage() {
  return <StaticKeywordPage slug="nilot-europe-servers" />;
}
