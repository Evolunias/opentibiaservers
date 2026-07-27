import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-midhem-ots');
}

export default function CurrentMidhemOtsKeywordPage() {
  return <StaticKeywordPage slug="current-midhem-ots" />;
}
