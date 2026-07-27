import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-fresh-start-server-brazil');
}

export default function ImperianicFreshStartServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="imperianic-fresh-start-server-brazil" />;
}
