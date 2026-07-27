import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiara-guide');
}

export default function FreshStartTibiaraGuideKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiara-guide" />;
}
