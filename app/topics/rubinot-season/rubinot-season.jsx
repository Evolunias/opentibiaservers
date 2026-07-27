import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-season');
}

export default function RubinotSeasonKeywordPage() {
  return <StaticKeywordPage slug="rubinot-season" />;
}
