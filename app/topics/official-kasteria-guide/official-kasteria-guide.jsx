import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-kasteria-guide');
}

export default function OfficialKasteriaGuideKeywordPage() {
  return <StaticKeywordPage slug="official-kasteria-guide" />;
}
