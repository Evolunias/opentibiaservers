import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibianus-ots');
}

export default function BestTibianusOtsKeywordPage() {
  return <StaticKeywordPage slug="best-tibianus-ots" />;
}
