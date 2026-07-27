import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-midhem');
}

export default function PopularMidhemKeywordPage() {
  return <StaticKeywordPage slug="popular-midhem" />;
}
