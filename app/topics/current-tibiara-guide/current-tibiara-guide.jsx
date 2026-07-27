import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiara-guide');
}

export default function CurrentTibiaraGuideKeywordPage() {
  return <StaticKeywordPage slug="current-tibiara-guide" />;
}
