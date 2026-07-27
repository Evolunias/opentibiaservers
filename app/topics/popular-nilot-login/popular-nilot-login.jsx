import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-nilot-login');
}

export default function PopularNilotLoginKeywordPage() {
  return <StaticKeywordPage slug="popular-nilot-login" />;
}
