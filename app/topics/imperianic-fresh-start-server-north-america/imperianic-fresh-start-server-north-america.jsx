import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-fresh-start-server-north-america');
}

export default function ImperianicFreshStartServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-fresh-start-server-north-america" />;
}
