import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-retro-server-brazil');
}

export default function RubinotRetroServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="rubinot-retro-server-brazil" />;
}
