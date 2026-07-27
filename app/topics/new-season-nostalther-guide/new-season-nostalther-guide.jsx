import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-nostalther-guide');
}

export default function NewSeasonNostaltherGuideKeywordPage() {
  return <StaticKeywordPage slug="new-season-nostalther-guide" />;
}
