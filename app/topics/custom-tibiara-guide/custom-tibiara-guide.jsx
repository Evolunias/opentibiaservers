import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiara-guide');
}

export default function CustomTibiaraGuideKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiara-guide" />;
}
