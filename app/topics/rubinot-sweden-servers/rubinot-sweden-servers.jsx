import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-sweden-servers');
}

export default function RubinotSwedenServersKeywordPage() {
  return <StaticKeywordPage slug="rubinot-sweden-servers" />;
}
