import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-france-servers');
}

export default function RubinotFranceServersKeywordPage() {
  return <StaticKeywordPage slug="rubinot-france-servers" />;
}
