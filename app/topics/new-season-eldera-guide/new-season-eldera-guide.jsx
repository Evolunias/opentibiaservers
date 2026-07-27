import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-eldera-guide');
}

export default function NewSeasonElderaGuideKeywordPage() {
  return <StaticKeywordPage slug="new-season-eldera-guide" />;
}
