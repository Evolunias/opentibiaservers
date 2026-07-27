import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiame-guide');
}

export default function CurrentTibiameGuideKeywordPage() {
  return <StaticKeywordPage slug="current-tibiame-guide" />;
}
