import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-neprenia-open-tibia');
}

export default function HighrateNepreniaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-neprenia-open-tibia" />;
}
