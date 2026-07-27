import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('forgotten-server-list');
}

export default function ForgottenServerListKeywordPage() {
  return <StaticKeywordPage slug="forgotten-server-list" />;
}
