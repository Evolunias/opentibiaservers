import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-season');
}

export default function CanobSeasonKeywordPage() {
  return <StaticKeywordPage slug="canob-season" />;
}
