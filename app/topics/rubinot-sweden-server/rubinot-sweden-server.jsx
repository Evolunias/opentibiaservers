import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-sweden-server');
}

export default function RubinotSwedenServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-sweden-server" />;
}
