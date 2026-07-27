import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-canada-servers');
}

export default function RubinotCanadaServersKeywordPage() {
  return <StaticKeywordPage slug="rubinot-canada-servers" />;
}
