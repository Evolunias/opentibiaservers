import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-south-america-server');
}

export default function RubinotSouthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-south-america-server" />;
}
