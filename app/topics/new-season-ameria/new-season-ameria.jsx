import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-ameria');
}

export default function NewSeasonAmeriaKeywordPage() {
  return <StaticKeywordPage slug="new-season-ameria" />;
}
