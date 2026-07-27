import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-fresh-start-server-poland');
}

export default function NilotFreshStartServerPolandKeywordPage() {
  return <StaticKeywordPage slug="nilot-fresh-start-server-poland" />;
}
