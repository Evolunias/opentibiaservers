import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-retro-server-poland');
}

export default function RubinotRetroServerPolandKeywordPage() {
  return <StaticKeywordPage slug="rubinot-retro-server-poland" />;
}
