import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-server');
}

export default function RubinotServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-server" />;
}
