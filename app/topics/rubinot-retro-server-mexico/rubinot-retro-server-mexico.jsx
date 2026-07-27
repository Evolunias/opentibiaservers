import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-retro-server-mexico');
}

export default function RubinotRetroServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="rubinot-retro-server-mexico" />;
}
