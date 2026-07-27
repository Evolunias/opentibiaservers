import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-guide');
}

export default function TibiaraGuideKeywordPage() {
  return <StaticKeywordPage slug="tibiara-guide" />;
}
