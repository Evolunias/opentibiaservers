import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('the-forgotten-server-2026');
}

export default function TheForgottenServer2026KeywordPage() {
  return <StaticKeywordPage slug="the-forgotten-server-2026" />;
}
