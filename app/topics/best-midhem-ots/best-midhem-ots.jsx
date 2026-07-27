import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-midhem-ots');
}

export default function BestMidhemOtsKeywordPage() {
  return <StaticKeywordPage slug="best-midhem-ots" />;
}
