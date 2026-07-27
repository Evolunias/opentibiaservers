import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-retro-server-canada');
}

export default function RubinotRetroServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-retro-server-canada" />;
}
