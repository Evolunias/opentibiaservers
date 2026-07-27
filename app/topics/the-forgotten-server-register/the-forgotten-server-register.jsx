import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('the-forgotten-server-register');
}

export default function TheForgottenServerRegisterKeywordPage() {
  return <StaticKeywordPage slug="the-forgotten-server-register" />;
}
