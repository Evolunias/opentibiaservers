import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-canob-server');
}

export default function CurrentCanobServerKeywordPage() {
  return <StaticKeywordPage slug="current-canob-server" />;
}
