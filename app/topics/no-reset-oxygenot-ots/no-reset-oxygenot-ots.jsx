import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-oxygenot-ots');
}

export default function NoResetOxygenotOtsKeywordPage() {
  return <StaticKeywordPage slug="no-reset-oxygenot-ots" />;
}
