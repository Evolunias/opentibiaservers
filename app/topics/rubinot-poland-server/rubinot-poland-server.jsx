import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-poland-server');
}

export default function RubinotPolandServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-poland-server" />;
}
