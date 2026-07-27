import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-madnessalive-ot-server');
}

export default function NoResetMadnessaliveOtServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-madnessalive-ot-server" />;
}
