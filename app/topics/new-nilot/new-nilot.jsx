import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-nilot');
}

export default function NewNilotKeywordPage() {
  return <StaticKeywordPage slug="new-nilot" />;
}
