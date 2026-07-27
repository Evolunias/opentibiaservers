import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-xanteria-guide');
}

export default function NewSeasonXanteriaGuideKeywordPage() {
  return <StaticKeywordPage slug="new-season-xanteria-guide" />;
}
