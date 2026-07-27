import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-madnessalive-server');
}

export default function NoResetMadnessaliveServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-madnessalive-server" />;
}
