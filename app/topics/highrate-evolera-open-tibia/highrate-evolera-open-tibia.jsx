import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-evolera-open-tibia');
}

export default function HighrateEvoleraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-evolera-open-tibia" />;
}
