import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-fresh-start-server-argentina');
}

export default function RubinotFreshStartServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-fresh-start-server-argentina" />;
}
