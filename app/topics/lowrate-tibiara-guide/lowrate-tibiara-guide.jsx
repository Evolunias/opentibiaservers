import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiara-guide');
}

export default function LowrateTibiaraGuideKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiara-guide" />;
}
