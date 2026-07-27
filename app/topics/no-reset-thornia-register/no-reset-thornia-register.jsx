import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-thornia-register');
}

export default function NoResetThorniaRegisterKeywordPage() {
  return <StaticKeywordPage slug="no-reset-thornia-register" />;
}
