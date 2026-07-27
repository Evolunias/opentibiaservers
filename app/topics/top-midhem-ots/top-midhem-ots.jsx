import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-midhem-ots');
}

export default function TopMidhemOtsKeywordPage() {
  return <StaticKeywordPage slug="top-midhem-ots" />;
}
