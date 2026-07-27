import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiantis');
}

export default function CurrentTibiantisKeywordPage() {
  return <StaticKeywordPage slug="current-tibiantis" />;
}
