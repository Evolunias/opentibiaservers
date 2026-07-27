import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-canob-client');
}

export default function NewCanobClientKeywordPage() {
  return <StaticKeywordPage slug="new-canob-client" />;
}
