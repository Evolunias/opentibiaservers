import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-midhem-ot');
}

export default function TopMidhemOtKeywordPage() {
  return <StaticKeywordPage slug="top-midhem-ot" />;
}
