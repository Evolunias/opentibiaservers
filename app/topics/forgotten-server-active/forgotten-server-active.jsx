import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('forgotten-server-active');
}

export default function ForgottenServerActiveKeywordPage() {
  return <StaticKeywordPage slug="forgotten-server-active" />;
}
