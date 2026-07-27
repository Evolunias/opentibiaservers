import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-europe-server');
}

export default function RubinotEuropeServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-europe-server" />;
}
