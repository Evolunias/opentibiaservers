import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-classick-drakoria-guide');
}

export default function OfficialClassickDrakoriaGuideKeywordPage() {
  return <StaticKeywordPage slug="official-classick-drakoria-guide" />;
}
