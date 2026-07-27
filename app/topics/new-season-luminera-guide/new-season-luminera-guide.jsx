import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-luminera-guide');
}

export default function NewSeasonLumineraGuideKeywordPage() {
  return <StaticKeywordPage slug="new-season-luminera-guide" />;
}
