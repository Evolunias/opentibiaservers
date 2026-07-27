import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-germany-server');
}

export default function RubinotGermanyServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-germany-server" />;
}
