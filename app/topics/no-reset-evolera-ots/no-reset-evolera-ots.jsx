import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-evolera-ots');
}

export default function NoResetEvoleraOtsKeywordPage() {
  return <StaticKeywordPage slug="no-reset-evolera-ots" />;
}
