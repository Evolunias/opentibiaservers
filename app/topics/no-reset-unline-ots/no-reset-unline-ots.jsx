import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-unline-ots');
}

export default function NoResetUnlineOtsKeywordPage() {
  return <StaticKeywordPage slug="no-reset-unline-ots" />;
}
