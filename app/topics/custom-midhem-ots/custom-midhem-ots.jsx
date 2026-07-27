import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-midhem-ots');
}

export default function CustomMidhemOtsKeywordPage() {
  return <StaticKeywordPage slug="custom-midhem-ots" />;
}
