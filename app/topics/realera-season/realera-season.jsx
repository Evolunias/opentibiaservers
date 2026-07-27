import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-season');
}

export default function RealeraSeasonKeywordPage() {
  return <StaticKeywordPage slug="realera-season" />;
}
