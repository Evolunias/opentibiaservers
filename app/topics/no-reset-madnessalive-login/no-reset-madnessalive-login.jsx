import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-madnessalive-login');
}

export default function NoResetMadnessaliveLoginKeywordPage() {
  return <StaticKeywordPage slug="no-reset-madnessalive-login" />;
}
