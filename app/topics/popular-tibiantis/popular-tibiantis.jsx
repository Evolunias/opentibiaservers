import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiantis');
}

export default function PopularTibiantisKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiantis" />;
}
