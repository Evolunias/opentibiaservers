import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-evolunia-guide');
}

export default function NewSeasonEvoluniaGuideKeywordPage() {
  return <StaticKeywordPage slug="new-season-evolunia-guide" />;
}
