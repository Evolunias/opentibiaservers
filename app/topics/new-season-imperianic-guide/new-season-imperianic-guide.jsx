import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-imperianic-guide');
}

export default function NewSeasonImperianicGuideKeywordPage() {
  return <StaticKeywordPage slug="new-season-imperianic-guide" />;
}
