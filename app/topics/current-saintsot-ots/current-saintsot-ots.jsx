import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-saintsot-ots');
}

export default function CurrentSaintsotOtsKeywordPage() {
  return <StaticKeywordPage slug="current-saintsot-ots" />;
}
