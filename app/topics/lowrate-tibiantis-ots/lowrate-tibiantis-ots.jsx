import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiantis-ots');
}

export default function LowrateTibiantisOtsKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiantis-ots" />;
}
