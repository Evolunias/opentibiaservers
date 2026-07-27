import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-midhem-ots');
}

export default function LowrateMidhemOtsKeywordPage() {
  return <StaticKeywordPage slug="lowrate-midhem-ots" />;
}
