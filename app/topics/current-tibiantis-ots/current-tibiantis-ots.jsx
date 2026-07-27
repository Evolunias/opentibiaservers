import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiantis-ots');
}

export default function CurrentTibiantisOtsKeywordPage() {
  return <StaticKeywordPage slug="current-tibiantis-ots" />;
}
