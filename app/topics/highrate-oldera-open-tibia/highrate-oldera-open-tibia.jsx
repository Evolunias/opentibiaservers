import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-oldera-open-tibia');
}

export default function HighrateOlderaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-oldera-open-tibia" />;
}
