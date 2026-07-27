import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiara-guide');
}

export default function TopTibiaraGuideKeywordPage() {
  return <StaticKeywordPage slug="top-tibiara-guide" />;
}
