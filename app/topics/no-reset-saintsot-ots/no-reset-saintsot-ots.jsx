import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-saintsot-ots');
}

export default function NoResetSaintsotOtsKeywordPage() {
  return <StaticKeywordPage slug="no-reset-saintsot-ots" />;
}
