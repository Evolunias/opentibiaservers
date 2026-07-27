import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-retro-server-germany');
}

export default function RubinotRetroServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="rubinot-retro-server-germany" />;
}
