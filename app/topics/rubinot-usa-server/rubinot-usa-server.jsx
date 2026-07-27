import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-usa-server');
}

export default function RubinotUsaServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-usa-server" />;
}
