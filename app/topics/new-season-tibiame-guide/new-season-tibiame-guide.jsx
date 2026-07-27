import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiame-guide');
}

export default function NewSeasonTibiameGuideKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiame-guide" />;
}
