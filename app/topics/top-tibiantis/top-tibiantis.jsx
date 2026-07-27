import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiantis');
}

export default function TopTibiantisKeywordPage() {
  return <StaticKeywordPage slug="top-tibiantis" />;
}
