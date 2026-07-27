import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-midhem-ots');
}

export default function HighrateMidhemOtsKeywordPage() {
  return <StaticKeywordPage slug="highrate-midhem-ots" />;
}
