import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-fresh-start-server-uk');
}

export default function NilotFreshStartServerUkKeywordPage() {
  return <StaticKeywordPage slug="nilot-fresh-start-server-uk" />;
}
