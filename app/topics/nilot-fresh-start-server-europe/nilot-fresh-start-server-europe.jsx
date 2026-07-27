import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-fresh-start-server-europe');
}

export default function NilotFreshStartServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="nilot-fresh-start-server-europe" />;
}
