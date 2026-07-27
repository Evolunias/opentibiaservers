import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiara-guide');
}

export default function OfficialTibiaraGuideKeywordPage() {
  return <StaticKeywordPage slug="official-tibiara-guide" />;
}
