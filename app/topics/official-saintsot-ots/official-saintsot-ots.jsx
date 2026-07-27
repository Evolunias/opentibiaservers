import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-saintsot-ots');
}

export default function OfficialSaintsotOtsKeywordPage() {
  return <StaticKeywordPage slug="official-saintsot-ots" />;
}
