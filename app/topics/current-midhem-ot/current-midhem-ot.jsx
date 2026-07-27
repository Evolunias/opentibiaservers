import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-midhem-ot');
}

export default function CurrentMidhemOtKeywordPage() {
  return <StaticKeywordPage slug="current-midhem-ot" />;
}
