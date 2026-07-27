import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-nilot-client');
}

export default function FreshStartNilotClientKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-nilot-client" />;
}
