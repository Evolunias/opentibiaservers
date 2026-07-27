import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-nilot-register');
}

export default function NoResetNilotRegisterKeywordPage() {
  return <StaticKeywordPage slug="no-reset-nilot-register" />;
}
