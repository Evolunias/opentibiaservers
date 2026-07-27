import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-france-server');
}

export default function RubinotFranceServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-france-server" />;
}
