import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiame-guide');
}

export default function NewTibiameGuideKeywordPage() {
  return <StaticKeywordPage slug="new-tibiame-guide" />;
}
