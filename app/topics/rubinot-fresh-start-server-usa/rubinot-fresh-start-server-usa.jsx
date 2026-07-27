import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-fresh-start-server-usa');
}

export default function RubinotFreshStartServerUsaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-fresh-start-server-usa" />;
}
