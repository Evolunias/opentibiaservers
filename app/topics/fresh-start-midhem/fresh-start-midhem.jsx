import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-midhem');
}

export default function FreshStartMidhemKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-midhem" />;
}
