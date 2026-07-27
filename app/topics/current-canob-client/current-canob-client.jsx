import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-canob-client');
}

export default function CurrentCanobClientKeywordPage() {
  return <StaticKeywordPage slug="current-canob-client" />;
}
