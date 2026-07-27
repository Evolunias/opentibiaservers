import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('forgotten-server-brazil');
}

export default function ForgottenServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="forgotten-server-brazil" />;
}
