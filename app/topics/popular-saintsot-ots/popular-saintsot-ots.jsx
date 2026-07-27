import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-saintsot-ots');
}

export default function PopularSaintsotOtsKeywordPage() {
  return <StaticKeywordPage slug="popular-saintsot-ots" />;
}
