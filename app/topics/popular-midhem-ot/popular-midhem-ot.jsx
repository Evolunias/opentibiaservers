import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-midhem-ot');
}

export default function PopularMidhemOtKeywordPage() {
  return <StaticKeywordPage slug="popular-midhem-ot" />;
}
