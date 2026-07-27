import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiantis');
}

export default function FreshStartTibiantisKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiantis" />;
}
