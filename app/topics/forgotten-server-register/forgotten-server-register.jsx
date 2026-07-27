import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('forgotten-server-register');
}

export default function ForgottenServerRegisterKeywordPage() {
  return <StaticKeywordPage slug="forgotten-server-register" />;
}
