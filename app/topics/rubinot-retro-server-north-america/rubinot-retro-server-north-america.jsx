import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-retro-server-north-america');
}

export default function RubinotRetroServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-retro-server-north-america" />;
}
