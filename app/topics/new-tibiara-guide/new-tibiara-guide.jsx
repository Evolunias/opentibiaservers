import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiara-guide');
}

export default function NewTibiaraGuideKeywordPage() {
  return <StaticKeywordPage slug="new-tibiara-guide" />;
}
