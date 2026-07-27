import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiame-guide');
}

export default function LowrateTibiameGuideKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiame-guide" />;
}
