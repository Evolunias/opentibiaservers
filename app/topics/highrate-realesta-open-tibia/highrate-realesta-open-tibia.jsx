import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-realesta-open-tibia');
}

export default function HighrateRealestaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-realesta-open-tibia" />;
}
