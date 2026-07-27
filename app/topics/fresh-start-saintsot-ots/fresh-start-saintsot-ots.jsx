import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-saintsot-ots');
}

export default function FreshStartSaintsotOtsKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-saintsot-ots" />;
}
