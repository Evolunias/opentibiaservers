import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-saintsot-ots');
}

export default function LowrateSaintsotOtsKeywordPage() {
  return <StaticKeywordPage slug="lowrate-saintsot-ots" />;
}
