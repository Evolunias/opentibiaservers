import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-canob-client');
}

export default function FreshStartCanobClientKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-canob-client" />;
}
