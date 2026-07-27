import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-saintsot-ots');
}

export default function BestSaintsotOtsKeywordPage() {
  return <StaticKeywordPage slug="best-saintsot-ots" />;
}
