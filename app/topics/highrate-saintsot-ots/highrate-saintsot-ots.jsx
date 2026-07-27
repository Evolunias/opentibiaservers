import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-saintsot-ots');
}

export default function HighrateSaintsotOtsKeywordPage() {
  return <StaticKeywordPage slug="highrate-saintsot-ots" />;
}
