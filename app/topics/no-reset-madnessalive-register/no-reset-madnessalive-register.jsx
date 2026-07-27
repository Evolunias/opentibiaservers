import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-madnessalive-register');
}

export default function NoResetMadnessaliveRegisterKeywordPage() {
  return <StaticKeywordPage slug="no-reset-madnessalive-register" />;
}
