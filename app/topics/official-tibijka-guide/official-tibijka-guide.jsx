import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibijka-guide');
}

export default function OfficialTibijkaGuideKeywordPage() {
  return <StaticKeywordPage slug="official-tibijka-guide" />;
}
