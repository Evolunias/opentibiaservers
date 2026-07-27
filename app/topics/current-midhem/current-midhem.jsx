import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-midhem');
}

export default function CurrentMidhemKeywordPage() {
  return <StaticKeywordPage slug="current-midhem" />;
}
