import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-canob-guide');
}

export default function OfficialCanobGuideKeywordPage() {
  return <StaticKeywordPage slug="official-canob-guide" />;
}
