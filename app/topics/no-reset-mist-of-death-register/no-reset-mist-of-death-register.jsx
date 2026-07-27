import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-mist-of-death-register');
}

export default function NoResetMistOfDeathRegisterKeywordPage() {
  return <StaticKeywordPage slug="no-reset-mist-of-death-register" />;
}
