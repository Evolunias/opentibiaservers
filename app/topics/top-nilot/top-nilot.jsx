import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-nilot');
}

export default function TopNilotKeywordPage() {
  return <StaticKeywordPage slug="top-nilot" />;
}
