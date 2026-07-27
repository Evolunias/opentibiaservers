import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-fresh-start-server-usa');
}

export default function ImperianicFreshStartServerUsaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-fresh-start-server-usa" />;
}
