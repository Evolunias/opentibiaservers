import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-midhem');
}

export default function BestMidhemKeywordPage() {
  return <StaticKeywordPage slug="best-midhem" />;
}
