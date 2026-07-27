import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiame-guide');
}

export default function OfficialTibiameGuideKeywordPage() {
  return <StaticKeywordPage slug="official-tibiame-guide" />;
}
