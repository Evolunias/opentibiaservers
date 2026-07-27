import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibianus-guide');
}

export default function OfficialTibianusGuideKeywordPage() {
  return <StaticKeywordPage slug="official-tibianus-guide" />;
}
