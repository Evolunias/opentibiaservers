import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiantis');
}

export default function NewTibiantisKeywordPage() {
  return <StaticKeywordPage slug="new-tibiantis" />;
}
