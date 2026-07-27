import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiantis');
}

export default function BestTibiantisKeywordPage() {
  return <StaticKeywordPage slug="best-tibiantis" />;
}
