import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-eldera-open-tibia');
}

export default function HighrateElderaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-eldera-open-tibia" />;
}
