import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-argentina-server');
}

export default function RubinotArgentinaServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-argentina-server" />;
}
