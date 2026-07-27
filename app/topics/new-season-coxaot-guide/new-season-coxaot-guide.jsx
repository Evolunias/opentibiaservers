import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-coxaot-guide');
}

export default function NewSeasonCoxaotGuideKeywordPage() {
  return <StaticKeywordPage slug="new-season-coxaot-guide" />;
}
