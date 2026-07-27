import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-fresh-start-server-poland');
}

export default function RubinotFreshStartServerPolandKeywordPage() {
  return <StaticKeywordPage slug="rubinot-fresh-start-server-poland" />;
}
