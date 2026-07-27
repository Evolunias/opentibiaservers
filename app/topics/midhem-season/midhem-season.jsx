import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-season');
}

export default function MidhemSeasonKeywordPage() {
  return <StaticKeywordPage slug="midhem-season" />;
}
