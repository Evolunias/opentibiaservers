import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('forgotten-server-usa');
}

export default function ForgottenServerUsaKeywordPage() {
  return <StaticKeywordPage slug="forgotten-server-usa" />;
}
