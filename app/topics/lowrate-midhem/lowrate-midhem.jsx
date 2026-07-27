import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-midhem');
}

export default function LowrateMidhemKeywordPage() {
  return <StaticKeywordPage slug="lowrate-midhem" />;
}
