import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-midhem-rules');
}

export default function HighrateMidhemRulesKeywordPage() {
  return <StaticKeywordPage slug="highrate-midhem-rules" />;
}
