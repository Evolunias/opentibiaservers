import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-nilot');
}

export default function FreshStartNilotKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-nilot" />;
}
