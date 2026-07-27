import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-canob-login');
}

export default function CurrentCanobLoginKeywordPage() {
  return <StaticKeywordPage slug="current-canob-login" />;
}
