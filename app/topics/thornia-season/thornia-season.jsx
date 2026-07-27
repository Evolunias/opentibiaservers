import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-season');
}

export default function ThorniaSeasonKeywordPage() {
  return <StaticKeywordPage slug="thornia-season" />;
}
