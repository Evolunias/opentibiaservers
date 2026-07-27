import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-europe-server');
}

export default function NilotEuropeServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-europe-server" />;
}
