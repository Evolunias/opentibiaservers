import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-guide');
}

export default function CanobGuideKeywordPage() {
  return <StaticKeywordPage slug="canob-guide" />;
}
