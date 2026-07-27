import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-nilot');
}

export default function PopularNilotKeywordPage() {
  return <StaticKeywordPage slug="popular-nilot" />;
}
