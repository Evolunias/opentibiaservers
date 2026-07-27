import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-ameria-open-tibia');
}

export default function HighrateAmeriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-ameria-open-tibia" />;
}
