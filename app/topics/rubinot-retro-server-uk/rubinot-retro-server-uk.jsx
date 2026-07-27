import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-retro-server-uk');
}

export default function RubinotRetroServerUkKeywordPage() {
  return <StaticKeywordPage slug="rubinot-retro-server-uk" />;
}
