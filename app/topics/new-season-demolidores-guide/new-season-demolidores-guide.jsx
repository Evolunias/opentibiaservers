import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-demolidores-guide');
}

export default function NewSeasonDemolidoresGuideKeywordPage() {
  return <StaticKeywordPage slug="new-season-demolidores-guide" />;
}
