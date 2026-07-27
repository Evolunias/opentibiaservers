import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-argentina-servers');
}

export default function RubinotArgentinaServersKeywordPage() {
  return <StaticKeywordPage slug="rubinot-argentina-servers" />;
}
