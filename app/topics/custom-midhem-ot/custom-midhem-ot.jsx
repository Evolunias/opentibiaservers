import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-midhem-ot');
}

export default function CustomMidhemOtKeywordPage() {
  return <StaticKeywordPage slug="custom-midhem-ot" />;
}
