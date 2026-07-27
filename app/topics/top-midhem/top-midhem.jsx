import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-midhem');
}

export default function TopMidhemKeywordPage() {
  return <StaticKeywordPage slug="top-midhem" />;
}
