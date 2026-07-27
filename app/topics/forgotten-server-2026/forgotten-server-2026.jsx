import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('forgotten-server-2026');
}

export default function ForgottenServer2026KeywordPage() {
  return <StaticKeywordPage slug="forgotten-server-2026" />;
}
