import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-saintsot-ots');
}

export default function TopSaintsotOtsKeywordPage() {
  return <StaticKeywordPage slug="top-saintsot-ots" />;
}
