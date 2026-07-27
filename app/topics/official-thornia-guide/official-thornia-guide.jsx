import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-thornia-guide');
}

export default function OfficialThorniaGuideKeywordPage() {
  return <StaticKeywordPage slug="official-thornia-guide" />;
}
