import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-luminera-register');
}

export default function NoResetLumineraRegisterKeywordPage() {
  return <StaticKeywordPage slug="no-reset-luminera-register" />;
}
