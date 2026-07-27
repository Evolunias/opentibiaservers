import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-fun-server');
}

export default function RubinotFunServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-fun-server" />;
}
