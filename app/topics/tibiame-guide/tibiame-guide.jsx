import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-guide');
}

export default function TibiameGuideKeywordPage() {
  return <StaticKeywordPage slug="tibiame-guide" />;
}
