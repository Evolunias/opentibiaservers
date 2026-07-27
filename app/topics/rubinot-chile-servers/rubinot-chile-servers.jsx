import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-chile-servers');
}

export default function RubinotChileServersKeywordPage() {
  return <StaticKeywordPage slug="rubinot-chile-servers" />;
}
