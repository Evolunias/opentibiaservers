import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-fresh-start-server-europe');
}

export default function ImperianicFreshStartServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="imperianic-fresh-start-server-europe" />;
}
