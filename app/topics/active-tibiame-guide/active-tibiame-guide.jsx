import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiame-guide');
}

export default function ActiveTibiameGuideKeywordPage() {
  return <StaticKeywordPage slug="active-tibiame-guide" />;
}
