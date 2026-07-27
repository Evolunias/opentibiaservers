import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-register-usa');
}

export default function NoResetRegisterUsaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-register-usa" />;
}
