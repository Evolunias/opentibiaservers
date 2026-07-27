import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-fresh-start-server-uk');
}

export default function ImperianicFreshStartServerUkKeywordPage() {
  return <StaticKeywordPage slug="imperianic-fresh-start-server-uk" />;
}
