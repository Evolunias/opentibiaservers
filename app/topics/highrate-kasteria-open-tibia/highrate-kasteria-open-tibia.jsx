import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-kasteria-open-tibia');
}

export default function HighrateKasteriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-kasteria-open-tibia" />;
}
