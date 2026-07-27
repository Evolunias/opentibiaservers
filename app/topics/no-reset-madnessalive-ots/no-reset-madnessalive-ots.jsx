import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-madnessalive-ots');
}

export default function NoResetMadnessaliveOtsKeywordPage() {
  return <StaticKeywordPage slug="no-reset-madnessalive-ots" />;
}
