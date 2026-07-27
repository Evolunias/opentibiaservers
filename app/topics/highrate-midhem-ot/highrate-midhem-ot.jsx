import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-midhem-ot');
}

export default function HighrateMidhemOtKeywordPage() {
  return <StaticKeywordPage slug="highrate-midhem-ot" />;
}
