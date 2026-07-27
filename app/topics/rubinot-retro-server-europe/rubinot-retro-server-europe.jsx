import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-retro-server-europe');
}

export default function RubinotRetroServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="rubinot-retro-server-europe" />;
}
