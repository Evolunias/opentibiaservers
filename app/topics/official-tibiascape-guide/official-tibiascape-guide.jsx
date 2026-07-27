import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiascape-guide');
}

export default function OfficialTibiascapeGuideKeywordPage() {
  return <StaticKeywordPage slug="official-tibiascape-guide" />;
}
