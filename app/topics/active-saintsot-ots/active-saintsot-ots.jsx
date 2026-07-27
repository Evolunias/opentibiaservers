import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-saintsot-ots');
}

export default function ActiveSaintsotOtsKeywordPage() {
  return <StaticKeywordPage slug="active-saintsot-ots" />;
}
