import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('forgotten-server');
}

export default function ForgottenServerKeywordPage() {
  return <StaticKeywordPage slug="forgotten-server" />;
}
