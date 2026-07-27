import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-fresh-start-server-france');
}

export default function RubinotFreshStartServerFranceKeywordPage() {
  return <StaticKeywordPage slug="rubinot-fresh-start-server-france" />;
}
