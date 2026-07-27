import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-canada-server');
}

export default function RubinotCanadaServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-canada-server" />;
}
