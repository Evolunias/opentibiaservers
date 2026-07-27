import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-serenity-guide');
}

export default function RealMapSerenityGuideKeywordPage() {
  return <StaticKeywordPage slug="real-map-serenity-guide" />;
}
