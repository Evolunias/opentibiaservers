import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-retro-server-usa');
}

export default function RubinotRetroServerUsaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-retro-server-usa" />;
}
