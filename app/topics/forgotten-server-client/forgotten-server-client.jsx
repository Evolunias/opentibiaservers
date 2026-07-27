import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('forgotten-server-client');
}

export default function ForgottenServerClientKeywordPage() {
  return <StaticKeywordPage slug="forgotten-server-client" />;
}
