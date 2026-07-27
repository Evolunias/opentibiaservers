import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-canob-server');
}

export default function NewCanobServerKeywordPage() {
  return <StaticKeywordPage slug="new-canob-server" />;
}
