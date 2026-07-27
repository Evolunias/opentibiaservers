import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-unline-open-tibia');
}

export default function HighrateUnlineOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-unline-open-tibia" />;
}
