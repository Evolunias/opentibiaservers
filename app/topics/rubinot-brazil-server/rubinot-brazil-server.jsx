import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-brazil-server');
}

export default function RubinotBrazilServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-brazil-server" />;
}
