import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-season');
}

export default function EvoleraSeasonKeywordPage() {
  return <StaticKeywordPage slug="evolera-season" />;
}
