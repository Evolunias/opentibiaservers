import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-retro-server-latin-america');
}

export default function RubinotRetroServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-retro-server-latin-america" />;
}
