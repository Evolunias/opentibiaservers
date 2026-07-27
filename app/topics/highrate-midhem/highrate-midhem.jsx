import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-midhem');
}

export default function HighrateMidhemKeywordPage() {
  return <StaticKeywordPage slug="highrate-midhem" />;
}
