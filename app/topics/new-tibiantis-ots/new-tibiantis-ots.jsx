import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiantis-ots');
}

export default function NewTibiantisOtsKeywordPage() {
  return <StaticKeywordPage slug="new-tibiantis-ots" />;
}
