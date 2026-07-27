import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-brazil-servers');
}

export default function RubinotBrazilServersKeywordPage() {
  return <StaticKeywordPage slug="rubinot-brazil-servers" />;
}
