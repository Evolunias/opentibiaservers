import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiantis-ots');
}

export default function BestTibiantisOtsKeywordPage() {
  return <StaticKeywordPage slug="best-tibiantis-ots" />;
}
