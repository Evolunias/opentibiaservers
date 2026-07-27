import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiantis');
}

export default function LowrateTibiantisKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiantis" />;
}
