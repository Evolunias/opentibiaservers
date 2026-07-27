import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-north-america-server');
}

export default function RubinotNorthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-north-america-server" />;
}
