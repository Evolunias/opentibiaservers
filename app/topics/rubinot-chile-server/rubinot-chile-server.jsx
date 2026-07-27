import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-chile-server');
}

export default function RubinotChileServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-chile-server" />;
}
