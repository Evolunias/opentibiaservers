import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-retro-server-france');
}

export default function RubinotRetroServerFranceKeywordPage() {
  return <StaticKeywordPage slug="rubinot-retro-server-france" />;
}
