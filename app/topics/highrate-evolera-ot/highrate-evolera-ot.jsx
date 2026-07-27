import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-evolera-ot');
}

export default function HighrateEvoleraOtKeywordPage() {
  return <StaticKeywordPage slug="highrate-evolera-ot" />;
}
