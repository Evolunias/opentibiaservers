import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-nilot');
}

export default function CurrentNilotKeywordPage() {
  return <StaticKeywordPage slug="current-nilot" />;
}
