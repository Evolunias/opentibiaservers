import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-nilot-login');
}

export default function TopNilotLoginKeywordPage() {
  return <StaticKeywordPage slug="top-nilot-login" />;
}
