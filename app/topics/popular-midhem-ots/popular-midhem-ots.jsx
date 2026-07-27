import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-midhem-ots');
}

export default function PopularMidhemOtsKeywordPage() {
  return <StaticKeywordPage slug="popular-midhem-ots" />;
}
