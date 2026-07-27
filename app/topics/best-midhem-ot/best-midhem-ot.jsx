import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-midhem-ot');
}

export default function BestMidhemOtKeywordPage() {
  return <StaticKeywordPage slug="best-midhem-ot" />;
}
