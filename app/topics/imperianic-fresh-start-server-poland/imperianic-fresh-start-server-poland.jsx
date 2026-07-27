import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-fresh-start-server-poland');
}

export default function ImperianicFreshStartServerPolandKeywordPage() {
  return <StaticKeywordPage slug="imperianic-fresh-start-server-poland" />;
}
